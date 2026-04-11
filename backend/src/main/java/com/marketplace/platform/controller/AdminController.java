package com.marketplace.platform.controller;

import com.marketplace.platform.dto.AdminReportStatusUpdateRequest;
import com.marketplace.platform.dto.ReviewResponse;
import com.marketplace.platform.dto.TransactionResponse;
import com.marketplace.platform.dto.UserResponse;
import com.marketplace.platform.dto.VendorClientReportResponse;
import com.marketplace.platform.entity.VendorClientReportStatus;
import com.marketplace.platform.service.AdminService;
import com.marketplace.platform.service.ReviewService;
import com.marketplace.platform.service.VendorReportService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AdminService adminService;
    private final ReviewService reviewService;
    private final VendorReportService vendorReportService;

    @GetMapping("/users")
    public List<UserResponse> getUsers() {
        return adminService.getUsers();
    }

    @PatchMapping("/vendors/{userId}/approve")
    public UserResponse approveVendor(@PathVariable Long userId) {
        return adminService.approveVendor(userId);
    }

    @PatchMapping("/users/{userId}/suspend")
    public UserResponse suspendUser(@PathVariable Long userId) {
        return adminService.suspendUser(userId);
    }

    @GetMapping("/transactions")
    public List<TransactionResponse> getTransactions() {
        return adminService.getTransactions();
    }

    @GetMapping("/reviews")
    public List<ReviewResponse> getReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/reports")
    public List<VendorClientReportResponse> getReports(@RequestParam(required = false) VendorClientReportStatus status) {
        return vendorReportService.getAdminReports(status);
    }

    @PatchMapping("/reports/{reportId}")
    public VendorClientReportResponse updateReportStatus(@PathVariable Long reportId,
                                                         @Valid @RequestBody AdminReportStatusUpdateRequest request) {
        return vendorReportService.updateReportStatus(reportId, request);
    }
}
