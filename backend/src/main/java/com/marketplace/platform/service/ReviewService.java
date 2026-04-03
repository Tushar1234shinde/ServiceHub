package com.marketplace.platform.service;

import com.marketplace.platform.dto.ReviewRequest;
import com.marketplace.platform.dto.ReviewResponse;
import com.marketplace.platform.entity.MarketplaceOrder;
import com.marketplace.platform.entity.OrderStatus;
import com.marketplace.platform.entity.Review;
import com.marketplace.platform.entity.VendorProfile;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ReviewRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final OrderRepository orderRepository;
    private final VendorProfileRepository vendorProfileRepository;

    @Transactional
    public ReviewResponse createReview(Long currentUserId, ReviewRequest request) {
        MarketplaceOrder order = orderRepository.findById(request.orderId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        if (!order.getClient().getId().equals(currentUserId)) {
            throw new BadRequestException("Only the client can review this order");
        }
        if (order.getStatus() != OrderStatus.COMPLETED) {
            throw new BadRequestException("Reviews are allowed only after completion");
        }

        Review review = reviewRepository.save(Review.builder()
                .order(order)
                .rating(request.rating())
                .comment(request.comment())
                .build());

        VendorProfile vendor = order.getVendor();
        List<Review> vendorReviews = reviewRepository.findByOrderVendorId(vendor.getId());
        BigDecimal average = BigDecimal.valueOf(vendorReviews.stream().mapToInt(Review::getRating).average().orElse(0.0))
                .setScale(1, RoundingMode.HALF_UP);
        vendor.setRating(average);
        vendorProfileRepository.save(vendor);

        return toResponse(review);
    }

    public List<ReviewResponse> getReviews(Long vendorId) {
        return reviewRepository.findByOrderVendorId(vendorId).stream().map(this::toResponse).toList();
    }

    private ReviewResponse toResponse(Review review) {
        return new ReviewResponse(
                review.getId(),
                review.getOrder().getId(),
                review.getRating(),
                review.getComment(),
                review.getOrder().getClient().getName(),
                review.getOrder().getVendor().getUser().getName(),
                review.getCreatedAt().toString()
        );
    }
}
