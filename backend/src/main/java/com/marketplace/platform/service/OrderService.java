package com.marketplace.platform.service;

import com.marketplace.platform.dto.*;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.PaymentRepository;
import com.marketplace.platform.repository.ReviewRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import com.marketplace.platform.repository.TransactionLedgerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final PaymentRepository paymentRepository;
    private final TransactionLedgerRepository transactionLedgerRepository;
    private final ReviewRepository reviewRepository;

    @Transactional
    public OrderResponse createOrder(User client, OrderCreateRequest request) {
        if (client.getRole() != Role.CLIENT) {
            throw new BadRequestException("Only clients can create orders");
        }
        ServiceListing service = serviceListingRepository.findById(request.serviceId())
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));

        LocalDate preferredDate = request.preferredDate();
        if (preferredDate != null && preferredDate.isBefore(LocalDate.now())) {
            throw new BadRequestException("Preferred booking date cannot be in the past");
        }
        if (request.attachments() != null && request.attachments().size() > 5) {
            throw new BadRequestException("You can upload up to 5 reference images per request");
        }

        ServicePricingOption pricingOption = resolvePricingOption(service, request.pricingOptionId());
        List<ServiceMaterialOption> selectedMaterialOptions = resolveMaterialOptions(service, request.materialOptionIds());

        BigDecimal totalPrice = pricingOption == null ? service.getPrice() : pricingOption.getPrice();
        BigDecimal materialTotal = selectedMaterialOptions.stream()
                .map(ServiceMaterialOption::getPriceAdjustment)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        MarketplaceOrder order = MarketplaceOrder.builder()
                .client(client)
                .vendor(service.getVendor())
                .service(service)
                .pricingOption(pricingOption)
                .status(OrderStatus.CREATED)
                .price(totalPrice.add(materialTotal))
                .preferredDate(preferredDate)
                .selectedPricingOptionLabel(pricingOption == null ? "Standard quote" : pricingOption.getLabel())
                .materialIncluded(pricingOption != null && pricingOption.isMaterialIncluded())
                .clientNote(trimToNull(request.clientNote()))
                .build();

        order.getAttachments().addAll(buildAttachments(order, request.attachments()));
        order.getSelectedMaterialOptions().addAll(buildMaterialSelections(order, selectedMaterialOptions));

        return toResponse(orderRepository.save(order));
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> getOrders(User currentUser) {
        List<MarketplaceOrder> orders = switch (currentUser.getRole()) {
            case CLIENT -> orderRepository.findDetailedByClientId(currentUser.getId());
            case VENDOR -> orderRepository.findDetailedByVendorUserId(currentUser.getId());
            case ADMIN -> orderRepository.findAllDetailed();
        };
        return orders.stream().map(this::toResponse).toList();
    }

    @Transactional
    public OrderResponse updateStatus(User currentUser, Long orderId, OrderStatusUpdateRequest request) {
        MarketplaceOrder order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));

        boolean isVendorOwner = order.getVendor().getUser().getId().equals(currentUser.getId());
        boolean isClientOwner = order.getClient().getId().equals(currentUser.getId());
        boolean isAdmin = currentUser.getRole() == Role.ADMIN;

        if (!(isVendorOwner || isClientOwner || isAdmin)) {
            throw new BadRequestException("You are not part of this order");
        }

        validateTransition(order.getStatus(), request.status(), isVendorOwner, isClientOwner, isAdmin);
        String note = trimToNull(request.statusNote() != null ? request.statusNote() : request.submissionNote());

        if (request.status() == OrderStatus.SUBMITTED && trimToNull(request.submissionNote()) == null) {
            throw new BadRequestException("Submission note is required when submitting work");
        }
        if (request.status() == OrderStatus.CANCELLED && isVendorOwner && note == null) {
            throw new BadRequestException("Decline reason is required when a vendor cancels an order");
        }

        order.setStatus(request.status());
        if (request.status() == OrderStatus.SUBMITTED) {
            order.setWorkSubmission(trimToNull(request.submissionNote()));
        }
        if (note != null) {
            order.setStatusNote(note);
        }
        if (request.status() == OrderStatus.CANCELLED) {
            refundHeldPaymentIfNeeded(order);
        }
        return toResponse(order);
    }

    private ServicePricingOption resolvePricingOption(ServiceListing service, Long pricingOptionId) {
        if (pricingOptionId == null) {
            return service.getPricingOptions().stream()
                    .filter(ServicePricingOption::isDefaultOption)
                    .findFirst()
                    .orElse(service.getPricingOptions().stream().findFirst().orElse(null));
        }

        return service.getPricingOptions().stream()
                .filter(option -> pricingOptionId.equals(option.getId()))
                .findFirst()
                .orElseThrow(() -> new BadRequestException("Selected pricing option does not belong to this service"));
    }

    private List<ServiceMaterialOption> resolveMaterialOptions(ServiceListing service, List<Long> materialOptionIds) {
        if (materialOptionIds == null || materialOptionIds.isEmpty()) {
            return List.of();
        }

        Map<Long, ServiceMaterialOption> availableOptions = service.getMaterialOptions().stream()
                .filter(ServiceMaterialOption::isActive)
                .collect(Collectors.toMap(ServiceMaterialOption::getId, Function.identity()));

        return materialOptionIds.stream()
                .distinct()
                .map(optionId -> {
                    ServiceMaterialOption option = availableOptions.get(optionId);
                    if (option == null) {
                        throw new BadRequestException("Selected material option does not belong to this service");
                    }
                    return option;
                })
                .toList();
    }

    private List<OrderRequestAttachment> buildAttachments(MarketplaceOrder order, List<OrderAttachmentRequest> attachments) {
        if (attachments == null || attachments.isEmpty()) {
            return List.of();
        }

        return attachments.stream()
                .map(attachment -> OrderRequestAttachment.builder()
                        .order(order)
                        .imageData(attachment.imageData().trim())
                        .caption(trimToNull(attachment.caption()))
                        .sortOrder(attachments.indexOf(attachment))
                        .build())
                .toList();
    }

    private List<OrderSelectedMaterialOption> buildMaterialSelections(MarketplaceOrder order, List<ServiceMaterialOption> selectedMaterialOptions) {
        return selectedMaterialOptions.stream()
                .map(option -> OrderSelectedMaterialOption.builder()
                        .order(order)
                        .materialOptionId(option.getId())
                        .name(option.getName())
                        .description(option.getDescription())
                        .priceAdjustment(option.getPriceAdjustment())
                        .build())
                .toList();
    }

    private void refundHeldPaymentIfNeeded(MarketplaceOrder order) {
        Payment payment = paymentRepository.findByOrderId(order.getId()).orElse(null);
        if (payment == null || payment.getStatus() != PaymentStatus.HELD) {
            return;
        }

        payment.setStatus(PaymentStatus.REFUNDED);
        transactionLedgerRepository.save(TransactionLedger.builder()
                .user(order.getClient())
                .type(TransactionType.CREDIT)
                .amount(payment.getAmount())
                .referenceId("PAY-" + payment.getId())
                .description("Escrow refunded for cancelled order #" + order.getId())
                .build());
    }

    private void validateTransition(OrderStatus current, OrderStatus next, boolean isVendor, boolean isClient, boolean isAdmin) {
        if (current == next) {
            throw new BadRequestException("Order is already in that status");
        }
        if (current == OrderStatus.CREATED) {
            throw new BadRequestException("Use the payment API to move an order from CREATED to PAID");
        }
        if (current == OrderStatus.PAID && next == OrderStatus.IN_PROGRESS && isVendor) {
            return;
        }
        if (current == OrderStatus.PAID && next == OrderStatus.CANCELLED && isVendor) {
            return;
        }
        if (current == OrderStatus.IN_PROGRESS && next == OrderStatus.SUBMITTED && isVendor) {
            return;
        }
        if (current == OrderStatus.SUBMITTED && next == OrderStatus.APPROVED && isClient) {
            return;
        }
        if ((current == OrderStatus.PAID || current == OrderStatus.IN_PROGRESS || current == OrderStatus.SUBMITTED)
                && (next == OrderStatus.CANCELLED || next == OrderStatus.DISPUTE)
                && (isClient || isAdmin)) {
            return;
        }
        if ((current == OrderStatus.APPROVED || current == OrderStatus.DISPUTE) && next == OrderStatus.COMPLETED && isAdmin) {
            return;
        }
        throw new BadRequestException("Invalid order state transition for your role or current status");
    }

    private OrderResponse toResponse(MarketplaceOrder order) {
        List<OrderMaterialSelectionResponse> selectedMaterialOptions = order.getSelectedMaterialOptions().stream()
                .map(option -> new OrderMaterialSelectionResponse(
                        option.getId(),
                        option.getMaterialOptionId(),
                        option.getName(),
                        option.getDescription(),
                        option.getPriceAdjustment()
                ))
                .toList();

        List<OrderAttachmentResponse> attachments = order.getAttachments().stream()
                .map(attachment -> new OrderAttachmentResponse(
                        attachment.getId(),
                        attachment.getImageData(),
                        attachment.getCaption(),
                        attachment.getSortOrder()
                ))
                .toList();

        Review review = reviewRepository.findByOrderId(order.getId()).orElse(null);

        return new OrderResponse(
                order.getId(),
                order.getClient().getId(),
                order.getClient().getName(),
                order.getVendor().getId(),
                order.getVendor().getUser().getName(),
                order.getService().getId(),
                order.getService().getTitle(),
                order.getStatus(),
                order.getPrice(),
                order.getWorkSubmission(),
                order.getPreferredDate() == null ? null : order.getPreferredDate().toString(),
                order.getSelectedPricingOptionLabel(),
                order.isMaterialIncluded(),
                order.getClientNote(),
                order.getStatusNote(),
                review != null,
                review == null ? null : review.getId(),
                selectedMaterialOptions,
                attachments,
                order.getCreatedAt().toString()
        );
    }

    private String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
