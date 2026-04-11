package com.marketplace.platform.service;

import com.marketplace.platform.dto.ReviewReplyRequest;
import com.marketplace.platform.dto.ReviewReplyResponse;
import com.marketplace.platform.dto.ReviewRequest;
import com.marketplace.platform.dto.ReviewResponse;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ReviewReplyRepository;
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
    private final ReviewReplyRepository reviewReplyRepository;

    @Transactional
    public ReviewResponse createReview(Long currentUserId, ReviewRequest request) {
        MarketplaceOrder order = orderRepository.findById(request.orderId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        if (!order.getClient().getId().equals(currentUserId)) {
            throw new BadRequestException("Only the client can review this order");
        }
        if (order.getStatus() != OrderStatus.APPROVED && order.getStatus() != OrderStatus.COMPLETED) {
            throw new BadRequestException("Reviews are allowed once the work is approved or completed");
        }
        if (reviewRepository.findByOrderId(order.getId()).isPresent()) {
            throw new BadRequestException("A review has already been submitted for this order");
        }

        Review review = reviewRepository.save(Review.builder()
                .order(order)
                .rating(request.rating())
                .comment(trimToEmpty(request.comment()))
                .build());

        refreshVendorRating(order.getVendor());
        return toResponse(review);
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse> getReviews(Long vendorId) {
        return reviewRepository.findAllByVendorIdWithAssociations(vendorId).stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse> getAllReviews() {
        return reviewRepository.findAllWithAssociations().stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse> getMyVendorReviews(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can access vendor reviews");
        }

        VendorProfile vendor = vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
        return reviewRepository.findAllByVendorIdWithAssociations(vendor.getId()).stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    public ReviewResponse replyToReview(User currentUser, Long reviewId, ReviewReplyRequest request) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can reply to reviews");
        }

        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new ResourceNotFoundException("Review not found"));

        if (!review.getOrder().getVendor().getUser().getId().equals(currentUser.getId())) {
            throw new BadRequestException("Only the reviewed vendor can reply to this review");
        }

        ReviewReply reply = review.getReply();
        if (reply == null) {
            reply = ReviewReply.builder()
                    .review(review)
                    .vendor(review.getOrder().getVendor())
                    .comment(request.comment().trim())
                    .build();
            review.setReply(reply);
        } else {
            reply.setComment(request.comment().trim());
        }

        reviewReplyRepository.save(reply);
        return toResponse(review);
    }

    private void refreshVendorRating(VendorProfile vendor) {
        List<Review> vendorReviews = reviewRepository.findAllByVendorIdWithAssociations(vendor.getId());
        BigDecimal average = BigDecimal.valueOf(vendorReviews.stream()
                        .mapToInt(Review::getRating)
                        .average()
                        .orElse(0.0))
                .setScale(1, RoundingMode.HALF_UP);
        vendor.setRating(average);
        vendorProfileRepository.save(vendor);
    }

    private ReviewResponse toResponse(Review review) {
        ReviewReply reply = review.getReply();
        ReviewReplyResponse replyResponse = reply == null
                ? null
                : new ReviewReplyResponse(
                        reply.getId(),
                        reply.getComment(),
                        reply.getVendor().getUser().getName(),
                        reply.getCreatedAt().toString(),
                        reply.getUpdatedAt().toString()
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

    private String trimToEmpty(String value) {
        if (value == null) {
            return "";
        }
        return value.trim();
    }
}
