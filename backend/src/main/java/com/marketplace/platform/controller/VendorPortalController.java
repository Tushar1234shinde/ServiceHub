package com.marketplace.platform.controller;

import com.marketplace.platform.dto.OrderResponse;
import com.marketplace.platform.dto.ServiceMaterialOptionRequest;
import com.marketplace.platform.dto.ServiceMaterialOptionResponse;
import com.marketplace.platform.dto.ServicePricingOptionRequest;
import com.marketplace.platform.dto.ServicePricingOptionResponse;
import com.marketplace.platform.dto.ServiceRequest;
import com.marketplace.platform.dto.ServiceResponse;
import com.marketplace.platform.dto.vendor.VendorDashboardResponse;
import com.marketplace.platform.dto.vendor.VendorEarningsResponse;
import com.marketplace.platform.dto.vendor.VendorOrderNoteUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorOrderStatusUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorProfileResponse;
import com.marketplace.platform.dto.vendor.VendorProfileUpdateRequest;
import com.marketplace.platform.dto.vendor.VendorReorderRequest;
import com.marketplace.platform.dto.vendor.VendorWorkSubmissionRequest;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.service.SecurityUtils;
import com.marketplace.platform.service.VendorPortalService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/vendor")
@RequiredArgsConstructor
@PreAuthorize("hasRole('VENDOR')")
public class VendorPortalController {

    private final VendorPortalService vendorPortalService;
    private final SecurityUtils securityUtils;

    @GetMapping("/dashboard")
    public VendorDashboardResponse getDashboard(Authentication authentication) {
        return vendorPortalService.getDashboard(currentUser(authentication));
    }

    @GetMapping("/me")
    public VendorProfileResponse getMyProfile(Authentication authentication) {
        return vendorPortalService.getMyProfile(currentUser(authentication));
    }

    @PutMapping("/me")
    public VendorProfileResponse updateMyProfile(Authentication authentication,
                                                 @Valid @RequestBody VendorProfileUpdateRequest request) {
        return vendorPortalService.updateMyProfile(currentUser(authentication), request);
    }

    @GetMapping("/services")
    public List<ServiceResponse> getMyServices(Authentication authentication) {
        return vendorPortalService.getMyServices(currentUser(authentication));
    }

    @PostMapping("/services")
    public ServiceResponse createService(Authentication authentication, @Valid @RequestBody ServiceRequest request) {
        return vendorPortalService.createService(currentUser(authentication), request);
    }

    @GetMapping("/services/{id}")
    public ServiceResponse getMyService(Authentication authentication, @PathVariable Long id) {
        return vendorPortalService.getMyService(currentUser(authentication), id);
    }

    @PutMapping("/services/{id}")
    public ServiceResponse updateService(Authentication authentication,
                                         @PathVariable Long id,
                                         @Valid @RequestBody ServiceRequest request) {
        return vendorPortalService.updateService(currentUser(authentication), id, request);
    }

    @DeleteMapping("/services/{id}")
    public ResponseEntity<Void> deleteService(Authentication authentication, @PathVariable Long id) {
        vendorPortalService.deleteService(currentUser(authentication), id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/services/{id}/pricing-options")
    public List<ServicePricingOptionResponse> getPricingOptions(Authentication authentication, @PathVariable Long id) {
        return vendorPortalService.getPricingOptions(currentUser(authentication), id);
    }

    @PostMapping("/services/{id}/pricing-options")
    public ServicePricingOptionResponse createPricingOption(Authentication authentication,
                                                            @PathVariable Long id,
                                                            @Valid @RequestBody ServicePricingOptionRequest request) {
        return vendorPortalService.createPricingOption(currentUser(authentication), id, request);
    }

    @PutMapping("/pricing-options/{id}")
    public ServicePricingOptionResponse updatePricingOption(Authentication authentication,
                                                            @PathVariable Long id,
                                                            @Valid @RequestBody ServicePricingOptionRequest request) {
        return vendorPortalService.updatePricingOption(currentUser(authentication), id, request);
    }

    @DeleteMapping("/pricing-options/{id}")
    public ResponseEntity<Void> deletePricingOption(Authentication authentication, @PathVariable Long id) {
        vendorPortalService.deletePricingOption(currentUser(authentication), id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/pricing-options/reorder")
    public List<ServicePricingOptionResponse> reorderPricingOptions(Authentication authentication,
                                                                    @Valid @RequestBody VendorReorderRequest request) {
        return vendorPortalService.reorderPricingOptions(currentUser(authentication), request);
    }

    @GetMapping("/services/{id}/material-options")
    public List<ServiceMaterialOptionResponse> getMaterialOptions(Authentication authentication, @PathVariable Long id) {
        return vendorPortalService.getMaterialOptions(currentUser(authentication), id);
    }

    @PostMapping("/services/{id}/material-options")
    public ServiceMaterialOptionResponse createMaterialOption(Authentication authentication,
                                                              @PathVariable Long id,
                                                              @Valid @RequestBody ServiceMaterialOptionRequest request) {
        return vendorPortalService.createMaterialOption(currentUser(authentication), id, request);
    }

    @PutMapping("/material-options/{id}")
    public ServiceMaterialOptionResponse updateMaterialOption(Authentication authentication,
                                                              @PathVariable Long id,
                                                              @Valid @RequestBody ServiceMaterialOptionRequest request) {
        return vendorPortalService.updateMaterialOption(currentUser(authentication), id, request);
    }

    @PatchMapping("/material-options/{id}/status")
    public ServiceMaterialOptionResponse updateMaterialOptionStatus(Authentication authentication,
                                                                    @PathVariable Long id,
                                                                    @RequestBody Map<String, Boolean> payload) {
        Boolean active = payload.get("active");
        if (active == null) {
            throw new BadRequestException("active is required");
        }
        return vendorPortalService.updateMaterialOptionStatus(currentUser(authentication), id, active);
    }

    @PatchMapping("/material-options/reorder")
    public List<ServiceMaterialOptionResponse> reorderMaterialOptions(Authentication authentication,
                                                                      @Valid @RequestBody VendorReorderRequest request) {
        return vendorPortalService.reorderMaterialOptions(currentUser(authentication), request);
    }

    @GetMapping("/orders")
    public List<OrderResponse> getOrders(Authentication authentication,
                                         @RequestParam(required = false) String status) {
        return vendorPortalService.getOrders(currentUser(authentication), status);
    }

    @GetMapping("/orders/{id}")
    public OrderResponse getOrder(Authentication authentication, @PathVariable Long id) {
        return vendorPortalService.getOrder(currentUser(authentication), id);
    }

    @PatchMapping("/orders/{id}/status")
    public OrderResponse updateOrderStatus(Authentication authentication,
                                           @PathVariable Long id,
                                           @Valid @RequestBody VendorOrderStatusUpdateRequest request) {
        return vendorPortalService.updateOrderStatus(currentUser(authentication), id, request);
    }

    @PatchMapping("/orders/{id}/note")
    public OrderResponse updateOrderNote(Authentication authentication,
                                         @PathVariable Long id,
                                         @Valid @RequestBody VendorOrderNoteUpdateRequest request) {
        return vendorPortalService.updateOrderNote(currentUser(authentication), id, request);
    }

    @PatchMapping("/orders/{id}/work-submission")
    public OrderResponse submitWork(Authentication authentication,
                                    @PathVariable Long id,
                                    @Valid @RequestBody VendorWorkSubmissionRequest request) {
        return vendorPortalService.submitWork(currentUser(authentication), id, request);
    }

    @GetMapping("/earnings")
    public VendorEarningsResponse getEarnings(Authentication authentication) {
        return vendorPortalService.getEarnings(currentUser(authentication));
    }

    private User currentUser(Authentication authentication) {
        return securityUtils.getCurrentUser(authentication);
    }
}
