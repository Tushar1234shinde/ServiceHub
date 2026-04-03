package com.marketplace.platform.controller;

import com.marketplace.platform.dto.TransactionResponse;
import com.marketplace.platform.dto.UserResponse;
import com.marketplace.platform.service.AdminService;
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
}
