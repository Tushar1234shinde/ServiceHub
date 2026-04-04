package com.marketplace.platform.controller;

import com.marketplace.platform.dto.ReviewResponse;
import com.marketplace.platform.dto.VendorAnalyticsResponse;
import com.marketplace.platform.dto.VendorPublicProfileResponse;
import com.marketplace.platform.dto.VendorWorkRequest;
import com.marketplace.platform.dto.VendorWorkResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.SecurityUtils;
import com.marketplace.platform.service.VendorInsightsService;
import com.marketplace.platform.service.VendorProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendors")
@RequiredArgsConstructor
public class VendorController {

    private final VendorInsightsService vendorInsightsService;
    private final VendorProfileService vendorProfileService;
    private final SecurityUtils securityUtils;

    @GetMapping("/public/{vendorId}")
    public VendorPublicProfileResponse getPublicProfile(@PathVariable Long vendorId) {
        return vendorProfileService.getPublicProfile(vendorId);
    }

    @GetMapping("/me/analytics")
    public VendorAnalyticsResponse getMyAnalytics(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorInsightsService.getMyAnalytics(user);
    }

    @GetMapping("/me/works")
    public List<VendorWorkResponse> getMyWorks(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorProfileService.getMyWorks(user);
    }

    @PostMapping("/me/works")
    public VendorWorkResponse createWork(Authentication authentication, @Valid @RequestBody VendorWorkRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorProfileService.createWork(user, request);
    }

    @PutMapping("/me/works/{workId}")
    public VendorWorkResponse updateWork(Authentication authentication,
                                         @PathVariable Long workId,
                                         @Valid @RequestBody VendorWorkRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorProfileService.updateWork(user, workId, request);
    }

    @DeleteMapping("/me/works/{workId}")
    public ResponseEntity<Void> deleteWork(Authentication authentication, @PathVariable Long workId) {
        User user = securityUtils.getCurrentUser(authentication);
        vendorProfileService.deleteWork(user, workId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/me/reviews")
    public List<ReviewResponse> getMyReviews(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorProfileService.getMyReviews(user);
    }
}
