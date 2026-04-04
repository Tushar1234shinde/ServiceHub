package com.marketplace.platform.service;

import com.marketplace.platform.dto.*;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ReviewRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import com.marketplace.platform.repository.VendorWorkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorProfileService {

    private final VendorProfileRepository vendorProfileRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final VendorWorkRepository vendorWorkRepository;
    private final ReviewRepository reviewRepository;
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public VendorPublicProfileResponse getPublicProfile(Long vendorId) {
        VendorProfile vendor = vendorProfileRepository.findByIdWithUser(vendorId)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));

        List<ServiceResponse> services = serviceListingRepository.findAllByVendorIdWithVendorAndUser(vendorId).stream()
                .sorted(Comparator.comparing(ServiceListing::getCreatedAt).reversed())
                .map(this::toServiceResponse)
                .toList();
        List<VendorWorkResponse> works = vendorWorkRepository.findByVendorIdWithVendorAndUserOrderByCreatedAtDesc(vendorId).stream()
                .map(this::toWorkResponse)
                .toList();
        List<ReviewResponse> reviews = reviewRepository.findAllByVendorIdWithAssociations(vendorId).stream()
                .map(this::toReviewResponse)
                .toList();
        long completedOrders = orderRepository.findByVendorId(vendorId).stream()
                .filter(order -> order.getStatus() == OrderStatus.COMPLETED)
                .count();

        return new VendorPublicProfileResponse(
                vendor.getId(),
                vendor.getUser().getName(),
                vendor.isVerified(),
                vendor.getRating() == null ? BigDecimal.ZERO : vendor.getRating(),
                (long) reviews.size(),
                completedOrders,
                (long) services.size(),
                vendor.getBio(),
                vendor.getLogoImage(),
                services,
                works,
                reviews
        );
    }

    @Transactional(readOnly = true)
    public List<VendorWorkResponse> getMyWorks(User currentUser) {
        requireVendorProfile(currentUser);
        return vendorWorkRepository.findByVendorUserIdWithVendorAndUserOrderByCreatedAtDesc(currentUser.getId()).stream()
                .map(this::toWorkResponse)
                .toList();
    }

    @Transactional
    public VendorWorkResponse createWork(User currentUser, VendorWorkRequest request) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        VendorWork work = vendorWorkRepository.save(VendorWork.builder()
                .vendor(vendor)
                .title(request.title().trim())
                .description(request.description().trim())
                .category(request.category().trim())
                .imageData(request.image().trim())
                .featured(request.featured())
                .build());
        return toWorkResponse(work);
    }

    @Transactional
    public VendorWorkResponse updateWork(User currentUser, Long workId, VendorWorkRequest request) {
        requireVendorProfile(currentUser);
        VendorWork work = vendorWorkRepository.findByIdAndVendorUserId(workId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Work item not found"));

        work.setTitle(request.title().trim());
        work.setDescription(request.description().trim());
        work.setCategory(request.category().trim());
        work.setImageData(request.image().trim());
        work.setFeatured(request.featured());
        return toWorkResponse(work);
    }

    @Transactional
    public void deleteWork(User currentUser, Long workId) {
        requireVendorProfile(currentUser);
        VendorWork work = vendorWorkRepository.findByIdAndVendorUserId(workId, currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Work item not found"));
        vendorWorkRepository.delete(work);
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse> getMyReviews(User currentUser) {
        VendorProfile vendor = requireVendorProfile(currentUser);
        return reviewRepository.findAllByVendorIdWithAssociations(vendor.getId()).stream()
                .map(this::toReviewResponse)
                .toList();
    }

    private VendorProfile requireVendorProfile(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can access vendor profile tools");
        }
        return vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
    }

    private ServiceResponse toServiceResponse(ServiceListing listing) {
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

    private VendorWorkResponse toWorkResponse(VendorWork work) {
        return new VendorWorkResponse(
                work.getId(),
                work.getVendor().getId(),
                work.getVendor().getUser().getName(),
                work.getVendor().isVerified(),
                work.getVendor().getLogoImage(),
                work.getTitle(),
                work.getDescription(),
                work.getCategory(),
                work.getImageData(),
                work.isFeatured(),
                work.getCreatedAt().toString()
        );
    }

    private ReviewResponse toReviewResponse(Review review) {
        ReviewReplyResponse replyResponse = review.getReply() == null
                ? null
                : new ReviewReplyResponse(
                        review.getReply().getId(),
                        review.getReply().getComment(),
                        review.getReply().getVendor().getUser().getName(),
                        review.getReply().getCreatedAt().toString(),
                        review.getReply().getUpdatedAt().toString()
                );

        return new ReviewResponse(
                review.getId(),
                review.getOrder().getId(),
                review.getOrder().getVendor().getId(),
                review.getRating(),
                review.getComment(),
                review.getOrder().getClient().getName(),
                review.getOrder().getClient().getProfileImage(),
                review.getOrder().getVendor().getUser().getName(),
                review.getCreatedAt().toString(),
                replyResponse
        );
    }
}
