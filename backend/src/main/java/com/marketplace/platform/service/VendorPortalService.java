package com.marketplace.platform.service;

import com.marketplace.platform.dto.OrderAttachmentResponse;
import com.marketplace.platform.dto.OrderMaterialSelectionResponse;
import com.marketplace.platform.dto.OrderResponse;
import com.marketplace.platform.dto.ServiceMaterialOptionRequest;
import com.marketplace.platform.dto.ServiceMaterialOptionResponse;
import com.marketplace.platform.dto.ServicePricingOptionRequest;
import com.marketplace.platform.dto.ServicePricingOptionResponse;
import com.marketplace.platform.dto.ServiceRequest;
import com.marketplace.platform.dto.ServiceResponse;
import com.marketplace.platform.dto.vendor.VendorDashboardResponse;
import com.marketplace.platform.dto.vendor.VendorEarningsOrderResponse;
import com.marketplace.platform.dto.vendor.VendorEarningsResponse;
import com.marketplace.platform.dto.vendor.VendorOrderNoteUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorOrderStatusUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorOverviewStatsResponse;
import com.marketplace.platform.dto.vendor.VendorProfileResponse;
import com.marketplace.platform.dto.vendor.VendorProfileUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorReorderRequest;
import com.marketplace.platform.dto.vendor.VendorWorkSubmissionRequest;
import com.marketplace.platform.entity.MarketplaceOrder;
import com.marketplace.platform.entity.OrderStatus;
import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.ServiceListing;
import com.marketplace.platform.entity.ServiceMaterialOption;
import com.marketplace.platform.entity.ServicePricingOption;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.entity.VendorProfile;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ReviewRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import com.marketplace.platform.repository.ServiceMaterialOptionRepository;
import com.marketplace.platform.repository.ServicePricingOptionRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorPortalService {

    private final VendorProfileRepository vendorProfileRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final ServicePricingOptionRepository servicePricingOptionRepository;
    private final ServiceMaterialOptionRepository serviceMaterialOptionRepository;
    private final OrderRepository orderRepository;
    private final ReviewRepository reviewRepository;

    @Transactional(readOnly = true)
    public VendorDashboardResponse getDashboard(User currentUser) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        List<ServiceListing> services = serviceListingRepository.findAllDetailedByVendorUserId(currentUser.getId());
        List<MarketplaceOrder> orders = orderRepository.findDetailedByVendorUserId(currentUser.getId());

        long completedOrders = orders.stream().filter(order -> order.getStatus() == OrderStatus.COMPLETED).count();
        long openOrders = orders.stream()
                .filter(order -> order.getStatus() == OrderStatus.PAID
                        || order.getStatus() == OrderStatus.IN_PROGRESS
                        || order.getStatus() == OrderStatus.SUBMITTED
                        || order.getStatus() == OrderStatus.DISPUTE)
                .count();

        return new VendorDashboardResponse(
                toVendorProfileResponse(vendor),
                new VendorOverviewStatsResponse(
                        vendor.isVerified(),
                        defaultRating(vendor),
                        defaultMoney(vendor.getTotalEarnings()),
                        services.size(),
                        services.size(),
                        orders.size(),
                        openOrders,
                        completedOrders
                ),
                orders.stream().limit(5).map(this::toOrderResponse).toList()
        );
    }

    @Transactional(readOnly = true)
    public VendorProfileResponse getMyProfile(User currentUser) {
        return toVendorProfileResponse(requireVendorProfile(currentUser));
    }

    @Transactional
    public VendorProfileResponse updateMyProfile(User currentUser, VendorProfileUpdateRequest request) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        vendor.setBio(trimToNull(request.bio()));
        vendor.setLogoImage(trimToNull(request.logoImage()));
        return toVendorProfileResponse(vendor);
    }

    @Transactional(readOnly = true)
    public List<ServiceResponse> getMyServices(User currentUser) {
        requireVendorProfile(currentUser);
        return serviceListingRepository.findAllDetailedByVendorUserId(currentUser.getId()).stream()
                .map(this::toServiceResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public ServiceResponse getMyService(User currentUser, Long serviceId) {
        return toServiceResponse(requireOwnedService(currentUser, serviceId));
    }

    @Transactional
    public ServiceResponse createService(User currentUser, ServiceRequest request) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        ServiceListing service = ServiceListing.builder().vendor(vendor).build();
        applyServiceRequest(service, request);
        return toServiceResponse(serviceListingRepository.save(service));
    }

    @Transactional
    public ServiceResponse updateService(User currentUser, Long serviceId, ServiceRequest request) {
        ServiceListing service = requireOwnedService(currentUser, serviceId);
        if (request.pricingOptions() != null || request.materialOptions() != null) {
            throw new BadRequestException("Update pricing and material options through their dedicated vendor endpoints");
        }
        applyServiceMetadata(service, request);
        refreshDisplayPrice(service);
        return toServiceResponse(service);
    }

    @Transactional
    public void deleteService(User currentUser, Long serviceId) {
        ServiceListing service = requireOwnedService(currentUser, serviceId);
        serviceListingRepository.delete(service);
    }

    @Transactional(readOnly = true)
    public List<ServicePricingOptionResponse> getPricingOptions(User currentUser, Long serviceId) {
        requireOwnedService(currentUser, serviceId);
        return servicePricingOptionRepository.findAllByServiceIdAndVendorUserId(serviceId, currentUser.getId()).stream()
                .map(this::toPricingOptionResponse)
                .toList();
    }

    @Transactional
    public ServicePricingOptionResponse createPricingOption(User currentUser, Long serviceId, ServicePricingOptionRequest request) {
        ServiceListing service = requireOwnedService(currentUser, serviceId);
        ServicePricingOption option = ServicePricingOption.builder().service(service).build();
        applyPricingOption(option, request);
        service.getPricingOptions().add(option);
        enforceSingleDefaultOption(service.getPricingOptions(), option);
        refreshDisplayPrice(service);
        return toPricingOptionResponse(option);
    }

    @Transactional
    public ServicePricingOptionResponse updatePricingOption(User currentUser, Long pricingOptionId, ServicePricingOptionRequest request) {
        ServicePricingOption option = requireOwnedPricingOption(currentUser, pricingOptionId);
        applyPricingOption(option, request);
        enforceSingleDefaultOption(option.getService().getPricingOptions(), option);
        refreshDisplayPrice(option.getService());
        return toPricingOptionResponse(option);
    }

    @Transactional
    public void deletePricingOption(User currentUser, Long pricingOptionId) {
        ServicePricingOption option = requireOwnedPricingOption(currentUser, pricingOptionId);
        ServiceListing service = option.getService();
        if (service.getPricingOptions().size() == 1) {
            throw new BadRequestException("A service must keep at least one pricing option");
        }
        service.getPricingOptions().removeIf(existing -> existing.getId().equals(option.getId()));
        servicePricingOptionRepository.delete(option);
        if (service.getPricingOptions().stream().noneMatch(ServicePricingOption::isDefaultOption)) {
            service.getPricingOptions().stream()
                    .min(Comparator.comparing(ServicePricingOption::getSortOrder).thenComparing(ServicePricingOption::getId))
                    .ifPresent(defaultOption -> defaultOption.setDefaultOption(true));
        }
        refreshDisplayPrice(service);
    }

    @Transactional
    public List<ServicePricingOptionResponse> reorderPricingOptions(User currentUser, VendorReorderRequest request) {
        return request.items().stream()
                .map(item -> {
                    ServicePricingOption option = requireOwnedPricingOption(currentUser, item.id());
                    option.setSortOrder(item.sortOrder());
                    return option;
                })
                .sorted(Comparator.comparing(ServicePricingOption::getSortOrder).thenComparing(ServicePricingOption::getId))
                .map(this::toPricingOptionResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ServiceMaterialOptionResponse> getMaterialOptions(User currentUser, Long serviceId) {
        requireOwnedService(currentUser, serviceId);
        return serviceMaterialOptionRepository.findAllByServiceIdAndVendorUserId(serviceId, currentUser.getId()).stream()
                .map(this::toMaterialOptionResponse)
                .toList();
    }

    @Transactional
    public ServiceMaterialOptionResponse createMaterialOption(User currentUser, Long serviceId, ServiceMaterialOptionRequest request) {
        ServiceListing service = requireOwnedService(currentUser, serviceId);
        ServiceMaterialOption option = ServiceMaterialOption.builder().service(service).active(true).build();
        applyMaterialOption(option, request, true);
        service.getMaterialOptions().add(option);
        return toMaterialOptionResponse(option);
    }

    @Transactional
    public ServiceMaterialOptionResponse updateMaterialOption(User currentUser, Long materialOptionId, ServiceMaterialOptionRequest request) {
        ServiceMaterialOption option = requireOwnedMaterialOption(currentUser, materialOptionId);
        applyMaterialOption(option, request, option.isActive());
        return toMaterialOptionResponse(option);
    }

    @Transactional
    public ServiceMaterialOptionResponse updateMaterialOptionStatus(User currentUser, Long materialOptionId, boolean active) {
        ServiceMaterialOption option = requireOwnedMaterialOption(currentUser, materialOptionId);
        option.setActive(active);
        return toMaterialOptionResponse(option);
    }

    @Transactional
    public List<ServiceMaterialOptionResponse> reorderMaterialOptions(User currentUser, VendorReorderRequest request) {
        return request.items().stream()
                .map(item -> {
                    ServiceMaterialOption option = requireOwnedMaterialOption(currentUser, item.id());
                    option.setSortOrder(item.sortOrder());
                    return option;
                })
                .sorted(Comparator.comparing(ServiceMaterialOption::getSortOrder).thenComparing(ServiceMaterialOption::getId))
                .map(this::toMaterialOptionResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<OrderResponse> getOrders(User currentUser, String statusFilter) {
        requireVendorProfile(currentUser);
        return orderRepository.findDetailedByVendorUserId(currentUser.getId()).stream()
                .filter(order -> matchesStatus(order, statusFilter))
                .map(this::toOrderResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public OrderResponse getOrder(User currentUser, Long orderId) {
        return toOrderResponse(requireOwnedOrder(currentUser, orderId));
    }

    @Transactional
    public OrderResponse updateOrderStatus(User currentUser, Long orderId, VendorOrderStatusUpdateRequest request) {
        MarketplaceOrder order = requireOwnedOrder(currentUser, orderId);
        validateVendorOrderTransition(order.getStatus(), request.status());
        order.setStatus(request.status());
        if (trimToNull(request.statusNote()) != null) {
            order.setStatusNote(trimToNull(request.statusNote()));
        }
        return toOrderResponse(order);
    }

    @Transactional
    public OrderResponse updateOrderNote(User currentUser, Long orderId, VendorOrderNoteUpdateRequest request) {
        MarketplaceOrder order = requireOwnedOrder(currentUser, orderId);
        order.setStatusNote(request.statusNote().trim());
        return toOrderResponse(order);
    }

    @Transactional
    public OrderResponse submitWork(User currentUser, Long orderId, VendorWorkSubmissionRequest request) {
        MarketplaceOrder order = requireOwnedOrder(currentUser, orderId);
        validateVendorOrderTransition(order.getStatus(), OrderStatus.SUBMITTED);
        order.setWorkSubmission(request.workSubmission().trim());
        order.setStatus(OrderStatus.SUBMITTED);
        order.setStatusNote("Work submitted by vendor");
        return toOrderResponse(order);
    }

    @Transactional(readOnly = true)
    public VendorEarningsResponse getEarnings(User currentUser) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        List<VendorEarningsOrderResponse> completedOrders = orderRepository.findDetailedByVendorUserId(currentUser.getId()).stream()
                .filter(order -> order.getStatus() == OrderStatus.COMPLETED)
                .map(order -> new VendorEarningsOrderResponse(
                        order.getId(),
                        order.getService().getTitle(),
                        order.getClient().getName(),
                        order.getPrice(),
                        order.getUpdatedAt().toString()
                ))
                .toList();
        return new VendorEarningsResponse(defaultMoney(vendor.getTotalEarnings()), completedOrders);
    }

    private VendorProfile requireVendorProfile(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendor accounts can access this module");
        }
        return vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
    }

    private ServiceListing requireOwnedService(User currentUser, Long serviceId) {
        requireVendorProfile(currentUser);
        return serviceListingRepository.findDetailedByIdAndVendorUserId(serviceId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
    }

    private ServicePricingOption requireOwnedPricingOption(User currentUser, Long pricingOptionId) {
        requireVendorProfile(currentUser);
        return servicePricingOptionRepository.findByIdAndVendorUserId(pricingOptionId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Pricing option not found"));
    }

    private ServiceMaterialOption requireOwnedMaterialOption(User currentUser, Long materialOptionId) {
        requireVendorProfile(currentUser);
        return serviceMaterialOptionRepository.findByIdAndVendorUserId(materialOptionId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Material option not found"));
    }

    private MarketplaceOrder requireOwnedOrder(User currentUser, Long orderId) {
        requireVendorProfile(currentUser);
        return orderRepository.findDetailedByIdAndVendorUserId(orderId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
    }

    private void applyServiceRequest(ServiceListing listing, ServiceRequest request) {
        applyServiceMetadata(listing, request);

        List<ServicePricingOption> pricingOptions = buildPricingOptions(listing, request);
        List<ServiceMaterialOption> materialOptions = buildMaterialOptions(listing, request);

        listing.getPricingOptions().clear();
        listing.getPricingOptions().addAll(pricingOptions);
        listing.getMaterialOptions().clear();
        listing.getMaterialOptions().addAll(materialOptions);
        refreshDisplayPrice(listing);
    }

    private void applyServiceMetadata(ServiceListing listing, ServiceRequest request) {
        String canonicalCategory = ServiceCategoryCatalog.requireCanonicalCategory(request.category());
        listing.setTitle(request.title().trim());
        listing.setDescription(request.description().trim());
        listing.setCategory(canonicalCategory);
        listing.setThumbnailImage(trimToNull(request.thumbnailImage()));
        if (listing.getPricingOptions().isEmpty()) {
            listing.setPrice(request.price());
        }
    }

    private List<ServicePricingOption> buildPricingOptions(ServiceListing listing, ServiceRequest request) {
        List<ServicePricingOptionRequest> requestedOptions = request.pricingOptions();
        if (requestedOptions == null || requestedOptions.isEmpty()) {
            return List.of(ServicePricingOption.builder()
                    .service(listing)
                    .label("Standard quote")
                    .description("Base service estimate")
                    .price(request.price())
                    .materialIncluded(false)
                    .defaultOption(true)
                    .sortOrder(0)
                    .build());
        }

        boolean hasDefault = requestedOptions.stream().anyMatch(ServicePricingOptionRequest::defaultOption);
        return requestedOptions.stream()
                .map(option -> ServicePricingOption.builder()
                        .service(listing)
                        .label(option.label().trim())
                        .description(trimToNull(option.description()))
                        .price(option.price())
                        .materialIncluded(option.materialIncluded())
                        .defaultOption(hasDefault ? option.defaultOption() : requestedOptions.indexOf(option) == 0)
                        .sortOrder(option.sortOrder() == null ? requestedOptions.indexOf(option) : option.sortOrder())
                        .build())
                .toList();
    }

    private List<ServiceMaterialOption> buildMaterialOptions(ServiceListing listing, ServiceRequest request) {
        List<ServiceMaterialOptionRequest> requestedOptions = request.materialOptions();
        if (requestedOptions == null || requestedOptions.isEmpty()) {
            return List.of();
        }

        return requestedOptions.stream()
                .map(option -> ServiceMaterialOption.builder()
                        .service(listing)
                        .name(option.name().trim())
                        .description(trimToNull(option.description()))
                        .priceAdjustment(option.priceAdjustment())
                        .defaultSelected(option.defaultSelected())
                        .active(true)
                        .sortOrder(option.sortOrder() == null ? requestedOptions.indexOf(option) : option.sortOrder())
                        .build())
                .toList();
    }

    private void applyPricingOption(ServicePricingOption option, ServicePricingOptionRequest request) {
        option.setLabel(request.label().trim());
        option.setDescription(trimToNull(request.description()));
        option.setPrice(request.price());
        option.setMaterialIncluded(request.materialIncluded());
        option.setDefaultOption(request.defaultOption());
        option.setSortOrder(request.sortOrder() == null ? 0 : request.sortOrder());
    }

    private void applyMaterialOption(ServiceMaterialOption option, ServiceMaterialOptionRequest request, boolean active) {
        option.setName(request.name().trim());
        option.setDescription(trimToNull(request.description()));
        option.setPriceAdjustment(request.priceAdjustment());
        option.setDefaultSelected(request.defaultSelected());
        option.setActive(active);
        option.setSortOrder(request.sortOrder() == null ? 0 : request.sortOrder());
    }

    private void enforceSingleDefaultOption(List<ServicePricingOption> options, ServicePricingOption current) {
        if (current.isDefaultOption()) {
            options.forEach(option -> option.setDefaultOption(option == current));
            return;
        }
        if (options.stream().noneMatch(ServicePricingOption::isDefaultOption)) {
            current.setDefaultOption(true);
        }
    }

    private void refreshDisplayPrice(ServiceListing service) {
        BigDecimal displayPrice = service.getPricingOptions().stream()
                .map(ServicePricingOption::getPrice)
                .min(Comparator.naturalOrder())
                .orElse(service.getPrice() == null ? BigDecimal.ZERO : service.getPrice());
        service.setPrice(displayPrice);
    }

    private boolean matchesStatus(MarketplaceOrder order, String statusFilter) {
        if (statusFilter == null || statusFilter.isBlank()) {
            return true;
        }
        return order.getStatus().name().equalsIgnoreCase(statusFilter.trim());
    }

    private void validateVendorOrderTransition(OrderStatus current, OrderStatus next) {
        if (current == next) {
            throw new BadRequestException("Order is already in that status");
        }
        if (current == OrderStatus.PAID && next == OrderStatus.IN_PROGRESS) {
            return;
        }
        if (current == OrderStatus.PAID && next == OrderStatus.CANCELLED) {
            return;
        }
        if (current == OrderStatus.IN_PROGRESS && next == OrderStatus.SUBMITTED) {
            return;
        }
        throw new BadRequestException("Invalid order transition for vendor");
    }

    private VendorProfileResponse toVendorProfileResponse(VendorProfile vendor) {
        return new VendorProfileResponse(
                vendor.getUser().getId(),
                vendor.getId(),
                vendor.getUser().getName(),
                vendor.getUser().getEmail(),
                vendor.getUser().getRole().name(),
                vendor.getUser().getStatus().name(),
                vendor.getUser().getProfileImage(),
                vendor.isVerified(),
                defaultRating(vendor),
                defaultMoney(vendor.getTotalEarnings()),
                vendor.getBio(),
                vendor.getLogoImage()
        );
    }

    private ServiceResponse toServiceResponse(ServiceListing listing) {
        List<ServicePricingOptionResponse> pricingOptions = listing.getPricingOptions().stream()
                .sorted(Comparator.comparing(ServicePricingOption::getSortOrder).thenComparing(ServicePricingOption::getId, Comparator.nullsLast(Comparator.naturalOrder())))
                .map(this::toPricingOptionResponse)
                .toList();

        List<ServiceMaterialOptionResponse> materialOptions = listing.getMaterialOptions().stream()
                .sorted(Comparator.comparing(ServiceMaterialOption::getSortOrder).thenComparing(ServiceMaterialOption::getId, Comparator.nullsLast(Comparator.naturalOrder())))
                .map(this::toMaterialOptionResponse)
                .toList();

        return new ServiceResponse(
                listing.getId(),
                listing.getVendor().getId(),
                listing.getVendor().getUser().getName(),
                listing.getVendor().isVerified(),
                listing.getVendor().getLogoImage(),
                defaultRating(listing.getVendor()),
                listing.getTitle(),
                listing.getDescription(),
                listing.getPrice(),
                listing.getCategory(),
                listing.getThumbnailImage(),
                pricingOptions,
                materialOptions,
                listing.getCreatedAt().toString()
        );
    }

    private ServicePricingOptionResponse toPricingOptionResponse(ServicePricingOption option) {
        return new ServicePricingOptionResponse(
                option.getId(),
                option.getLabel(),
                option.getDescription(),
                option.getPrice(),
                option.isMaterialIncluded(),
                option.isDefaultOption(),
                option.getSortOrder()
        );
    }

    private ServiceMaterialOptionResponse toMaterialOptionResponse(ServiceMaterialOption option) {
        return new ServiceMaterialOptionResponse(
                option.getId(),
                option.getName(),
                option.getDescription(),
                option.getPriceAdjustment(),
                option.isDefaultSelected(),
                option.isActive(),
                option.getSortOrder()
        );
    }

    private OrderResponse toOrderResponse(MarketplaceOrder order) {
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

        com.marketplace.platform.entity.Review review = reviewRepository.findByOrderId(order.getId()).orElse(null);

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

    private BigDecimal defaultRating(VendorProfile vendor) {
        return vendor.getRating() == null ? BigDecimal.ZERO : vendor.getRating();
    }

    private BigDecimal defaultMoney(BigDecimal amount) {
        return amount == null ? BigDecimal.ZERO : amount;
    }

    private String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
