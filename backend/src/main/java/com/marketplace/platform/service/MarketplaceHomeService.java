package com.marketplace.platform.service;

import com.marketplace.platform.dto.*;
import com.marketplace.platform.entity.MarketplaceOrder;
import com.marketplace.platform.entity.OrderStatus;
import com.marketplace.platform.entity.Review;
import com.marketplace.platform.entity.VendorProfile;
import com.marketplace.platform.entity.VendorWork;
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
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MarketplaceHomeService {

    private final VendorProfileRepository vendorProfileRepository;
    private final ServiceListingRepository serviceListingRepository;
    private final OrderRepository orderRepository;
    private final ReviewRepository reviewRepository;
    private final VendorWorkRepository vendorWorkRepository;

    @Transactional(readOnly = true)
    public MarketplaceHomeResponse getHomepage() {
        List<VendorProfile> vendors = vendorProfileRepository.findAllWithUser();
        List<MarketplaceOrder> orders = orderRepository.findAll();
        List<Review> reviews = reviewRepository.findAllWithAssociations();
        List<VendorWork> works = vendorWorkRepository.findAllWithVendorAndUserOrderByCreatedAtDesc();

        Map<Long, Long> serviceCounts = serviceListingRepository.findAllWithVendorAndUser().stream()
                .collect(Collectors.groupingBy(service -> service.getVendor().getId(), Collectors.counting()));

        Map<Long, Map<String, Long>> categoryCounts = serviceListingRepository.findAllWithVendorAndUser().stream()
                .collect(Collectors.groupingBy(
                        service -> service.getVendor().getId(),
                        Collectors.groupingBy(service -> service.getCategory(), Collectors.counting())
                ));

        Map<Long, Long> reviewCounts = reviews.stream()
                .collect(Collectors.groupingBy(review -> review.getOrder().getVendor().getId(), Collectors.counting()));

        Map<Long, Long> completedOrderCounts = orders.stream()
                .filter(order -> order.getStatus() == OrderStatus.COMPLETED)
                .collect(Collectors.groupingBy(order -> order.getVendor().getId(), Collectors.counting()));

        record VendorSnapshot(
                VendorProfile vendor,
                BigDecimal rating,
                Long reviewCount,
                Long completedOrders,
                Long activeServices,
                List<String> topCategories
        ) {}

        List<VendorSpotlightResponse> topVendors = vendors.stream()
                .map(vendor -> new VendorSnapshot(
                        vendor,
                        vendor.getRating() == null ? BigDecimal.ZERO : vendor.getRating(),
                        reviewCounts.getOrDefault(vendor.getId(), 0L),
                        completedOrderCounts.getOrDefault(vendor.getId(), 0L),
                        serviceCounts.getOrDefault(vendor.getId(), 0L),
                        categoryCounts.getOrDefault(vendor.getId(), Map.of()).entrySet().stream()
                                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                                .limit(2)
                                .map(Map.Entry::getKey)
                                .toList()
                ))
                .filter(snapshot -> snapshot.activeServices() > 0 || snapshot.reviewCount() > 0 || works.stream().anyMatch(work -> work.getVendor().getId().equals(snapshot.vendor().getId())))
                .sorted(Comparator
                        .comparing((VendorSnapshot snapshot) -> snapshot.rating(), Comparator.reverseOrder())
                        .thenComparing(snapshot -> snapshot.reviewCount(), Comparator.reverseOrder())
                        .thenComparing(snapshot -> snapshot.completedOrders(), Comparator.reverseOrder())
                        .thenComparing(snapshot -> snapshot.activeServices(), Comparator.reverseOrder())
                        .thenComparing(snapshot -> snapshot.vendor().getCreatedAt(), Comparator.reverseOrder()))
                .limit(5)
                .map(snapshot -> new VendorSpotlightResponse(
                        snapshot.vendor().getId(),
                        snapshot.vendor().getUser().getName(),
                        snapshot.vendor().getBio(),
                        snapshot.vendor().isVerified(),
                        snapshot.rating(),
                        snapshot.reviewCount(),
                        snapshot.completedOrders(),
                        snapshot.activeServices(),
                        snapshot.vendor().getLogoImage(),
                        snapshot.topCategories()
                ))
                .toList();

        List<VendorWorkResponse> recentWorks = works.stream()
                .limit(6)
                .map(this::toWorkResponse)
                .toList();

        List<ReviewResponse> testimonials = reviews.stream()
                .limit(6)
                .map(this::toReviewResponse)
                .toList();

        return new MarketplaceHomeResponse(topVendors, recentWorks, testimonials);
    }

    @Transactional(readOnly = true)
    public List<VendorWorkResponse> getGalleryWorks() {
        return vendorWorkRepository.findAllWithVendorAndUserOrderByCreatedAtDesc().stream()
                .map(this::toWorkResponse)
                .toList();
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
