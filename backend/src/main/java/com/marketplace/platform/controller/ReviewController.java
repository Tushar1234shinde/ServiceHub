package com.marketplace.platform.controller;

import com.marketplace.platform.dto.ReviewRequest;
import com.marketplace.platform.dto.ReviewResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.ReviewService;
import com.marketplace.platform.service.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;
    private final SecurityUtils securityUtils;

    @PostMapping
    public ReviewResponse createReview(Authentication authentication, @Valid @RequestBody ReviewRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return reviewService.createReview(user.getId(), request);
    }

    @GetMapping
    public List<ReviewResponse> getReviews(@RequestParam Long vendorId) {
        return reviewService.getReviews(vendorId);
    }
}
