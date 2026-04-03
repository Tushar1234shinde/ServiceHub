package com.marketplace.platform.service;

import com.marketplace.platform.dto.OrderCreateRequest;
import com.marketplace.platform.dto.OrderResponse;
import com.marketplace.platform.dto.OrderStatusUpdateRequest;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ServiceListingRepository serviceListingRepository;

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

        MarketplaceOrder order = orderRepository.save(MarketplaceOrder.builder()
                .client(client)
                .vendor(service.getVendor())
                .service(service)
                .status(OrderStatus.CREATED)
                .price(service.getPrice())
                .preferredDate(preferredDate)
                .build());
        return toResponse(order);
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> getOrders(User currentUser) {
        List<MarketplaceOrder> orders = switch (currentUser.getRole()) {
            case CLIENT -> orderRepository.findByClientId(currentUser.getId());
            case VENDOR -> orderRepository.findByVendorUserId(currentUser.getId());
            case ADMIN -> orderRepository.findAll();
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
        if (request.status() == OrderStatus.SUBMITTED && (request.submissionNote() == null || request.submissionNote().isBlank())) {
            throw new BadRequestException("Submission note is required when submitting work");
        }

        order.setStatus(request.status());
        if (request.status() == OrderStatus.SUBMITTED) {
            order.setWorkSubmission(request.submissionNote());
        }
        return toResponse(order);
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
        if (current == OrderStatus.APPROVED && next == OrderStatus.COMPLETED && isAdmin) {
            return;
        }
        throw new BadRequestException("Invalid order state transition");
    }

    private OrderResponse toResponse(MarketplaceOrder order) {
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
                order.getCreatedAt().toString()
        );
    }
}
