package com.marketplace.platform.controller;

import com.marketplace.platform.dto.ServiceRequest;
import com.marketplace.platform.dto.ServiceResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.SecurityUtils;
import com.marketplace.platform.service.ServiceListingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceListingService serviceListingService;
    private final SecurityUtils securityUtils;

    @GetMapping
    public List<ServiceResponse> getServices(@RequestParam(required = false) String search,
                                             @RequestParam(required = false) String category) {
        return serviceListingService.getServices(search, category);
    }

    @GetMapping("/mine")
    public List<ServiceResponse> getMyServices(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return serviceListingService.getMyServices(user);
    }

    @PostMapping
    public ServiceResponse createService(Authentication authentication, @Valid @RequestBody ServiceRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return serviceListingService.createService(user, request);
    }

    @PutMapping("/{id}")
    public ServiceResponse updateService(Authentication authentication, @PathVariable Long id, @Valid @RequestBody ServiceRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return serviceListingService.updateService(user, id, request);
    }
}
