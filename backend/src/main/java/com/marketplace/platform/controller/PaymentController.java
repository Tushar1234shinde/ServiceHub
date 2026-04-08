package com.marketplace.platform.controller;

import com.marketplace.platform.dto.PaymentCreateRequest;
import com.marketplace.platform.dto.PaymentReleaseRequest;
import com.marketplace.platform.dto.PaymentResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.PaymentService;
import com.marketplace.platform.service.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;
    private final SecurityUtils securityUtils;

    @PostMapping("/create")
    public PaymentResponse createPayment(Authentication authentication, @Valid @RequestBody PaymentCreateRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return paymentService.createEscrowPayment(user, request);
    }

    @PostMapping("/release")
    @PreAuthorize("hasRole('ADMIN')")
    public PaymentResponse releasePayment(@Valid @RequestBody PaymentReleaseRequest request) {
        return paymentService.releaseEscrow(request);
    }

    @GetMapping("/order/{orderId}")
    public PaymentResponse getPayment(Authentication authentication, @PathVariable Long orderId) {
        User user = securityUtils.getCurrentUser(authentication);
        return paymentService.getByOrder(user, orderId);
    }
}
