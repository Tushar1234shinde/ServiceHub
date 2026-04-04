package com.marketplace.platform.service;

import com.marketplace.platform.dto.*;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.ServiceListingRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class ServiceListingService {

    private final ServiceListingRepository serviceListingRepository;
    private final VendorProfileRepository vendorProfileRepository;

    @Transactional(readOnly = true)
    public List<ServiceResponse> getServices(String search, String category) {
        String searchTerm = normalize(search);
        String categoryTerm = normalizeCategoryFilter(category);

        return serviceListingRepository.findAllWithVendorAndUser().stream()
                .filter(listing -> matchesSearch(listing, searchTerm))
                .filter(listing -> matchesCategory(listing, categoryTerm))
                .sorted(Comparator.comparing(ServiceListing::getCreatedAt).reversed())
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ServiceResponse> getMyServices(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can access their own services");
        }

        return serviceListingRepository.findAllByVendorUserIdWithVendorAndUser(currentUser.getId()).stream()
                .sorted(Comparator.comparing(ServiceListing::getCreatedAt).reversed())
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public ServiceResponse createService(User currentUser, ServiceRequest request) {
        VendorProfile vendor = requireVendorProfile(currentUser);

        ServiceListing listing = ServiceListing.builder()
                .vendor(vendor)
                .build();
        applyRequest(listing, request);

        return toResponse(serviceListingRepository.save(listing));
    }

    @Transactional
    public ServiceResponse updateService(User currentUser, Long serviceId, ServiceRequest request) {
        ServiceListing listing = serviceListingRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
        if (!listing.getVendor().getUser().getId().equals(currentUser.getId())) {
            throw new BadRequestException("Only the owner vendor can update this service");
        }

        applyRequest(listing, request);
        return toResponse(listing);
    }

    private VendorProfile requireVendorProfile(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can manage services");
        }
        return vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
    }

    private void applyRequest(ServiceListing listing, ServiceRequest request) {
        String canonicalCategory = ServiceCategoryCatalog.requireCanonicalCategory(request.category());

        listing.setTitle(request.title().trim());
        listing.setDescription(request.description().trim());
        listing.setCategory(canonicalCategory);
        listing.setThumbnailImage(trimToNull(request.thumbnailImage()));

        List<ServicePricingOption> pricingOptions = buildPricingOptions(listing, request);
        List<ServiceMaterialOption> materialOptions = buildMaterialOptions(listing, request);

        listing.getPricingOptions().clear();
        listing.getPricingOptions().addAll(pricingOptions);
        listing.getMaterialOptions().clear();
        listing.getMaterialOptions().addAll(materialOptions);

        BigDecimal displayPrice = pricingOptions.stream()
                .map(ServicePricingOption::getPrice)
                .min(Comparator.naturalOrder())
                .orElse(request.price());
        listing.setPrice(displayPrice);
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

    private boolean matchesSearch(ServiceListing listing, String searchTerm) {
        if (searchTerm == null) {
            return true;
        }
        String title = listing.getTitle() == null ? "" : listing.getTitle().toLowerCase(Locale.ROOT);
        String description = listing.getDescription() == null ? "" : listing.getDescription().toLowerCase(Locale.ROOT);
        return title.contains(searchTerm) || description.contains(searchTerm);
    }

    private boolean matchesCategory(ServiceListing listing, String categoryTerm) {
        if (categoryTerm == null) {
            return true;
        }
        return listing.getCategory() != null && listing.getCategory().equals(categoryTerm);
    }

    private String normalize(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim().toLowerCase(Locale.ROOT);
        return trimmed.isEmpty() ? null : trimmed;
    }

    private String normalizeCategoryFilter(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        return ServiceCategoryCatalog.requireCanonicalCategory(value);
    }

    private ServiceResponse toResponse(ServiceListing listing) {
        List<ServicePricingOptionResponse> pricingOptions = listing.getPricingOptions().stream()
                .sorted(Comparator.comparing(ServicePricingOption::getSortOrder).thenComparing(ServicePricingOption::getId, Comparator.nullsLast(Comparator.naturalOrder())))
                .map(option -> new ServicePricingOptionResponse(
                        option.getId(),
                        option.getLabel(),
                        option.getDescription(),
                        option.getPrice(),
                        option.isMaterialIncluded(),
                        option.isDefaultOption(),
                        option.getSortOrder()
                ))
                .toList();

        List<ServiceMaterialOptionResponse> materialOptions = listing.getMaterialOptions().stream()
                .filter(ServiceMaterialOption::isActive)
                .sorted(Comparator.comparing(ServiceMaterialOption::getSortOrder).thenComparing(ServiceMaterialOption::getId, Comparator.nullsLast(Comparator.naturalOrder())))
                .map(option -> new ServiceMaterialOptionResponse(
                        option.getId(),
                        option.getName(),
                        option.getDescription(),
                        option.getPriceAdjustment(),
                        option.isDefaultSelected(),
                        option.isActive(),
                        option.getSortOrder()
                ))
                .toList();

        return new ServiceResponse(
                listing.getId(),
                listing.getVendor().getId(),
                listing.getVendor().getUser().getName(),
                listing.getVendor().isVerified(),
                listing.getVendor().getLogoImage(),
                listing.getVendor().getRating() == null ? BigDecimal.ZERO : listing.getVendor().getRating(),
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

    private String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
