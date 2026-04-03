package com.marketplace.platform.controller;

import com.marketplace.platform.dto.VendorAnalyticsResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.SecurityUtils;
import com.marketplace.platform.service.VendorInsightsService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vendors")
@RequiredArgsConstructor
public class VendorController {

    private final VendorInsightsService vendorInsightsService;
    private final SecurityUtils securityUtils;

    @GetMapping("/me/analytics")
    public VendorAnalyticsResponse getMyAnalytics(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return vendorInsightsService.getMyAnalytics(user);
    }
}
