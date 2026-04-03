package com.marketplace.platform.service;

import com.marketplace.platform.dto.ServiceRequest;
import com.marketplace.platform.dto.ServiceResponse;
import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.ServiceListing;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.entity.VendorProfile;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.ServiceListingRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.Locale;
import java.util.List;

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
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can create services");
        }

        VendorProfile vendor = vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));

        String canonicalCategory = ServiceCategoryCatalog.requireCanonicalCategory(request.category());
        ServiceListing listing = serviceListingRepository.save(ServiceListing.builder()
                .vendor(vendor)
                .title(request.title())
                .description(request.description())
                .price(request.price())
                .category(canonicalCategory)
                .build());
        return toResponse(listing);
    }

    @Transactional
    public ServiceResponse updateService(User currentUser, Long serviceId, ServiceRequest request) {
        ServiceListing listing = serviceListingRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
        if (!listing.getVendor().getUser().getId().equals(currentUser.getId())) {
            throw new BadRequestException("Only the owner vendor can update this service");
        }

        String canonicalCategory = ServiceCategoryCatalog.requireCanonicalCategory(request.category());
        listing.setTitle(request.title());
        listing.setDescription(request.description());
        listing.setPrice(request.price());
        listing.setCategory(canonicalCategory);
        return toResponse(listing);
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
        return new ServiceResponse(
                listing.getId(),
                listing.getVendor().getId(),
                listing.getVendor().getUser().getName(),
                listing.getVendor().isVerified(),
                listing.getTitle(),
                listing.getDescription(),
                listing.getPrice(),
                listing.getCategory(),
                listing.getCreatedAt().toString()
        );
    }
}
