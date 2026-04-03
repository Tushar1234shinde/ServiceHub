package com.marketplace.platform.controller;

import com.marketplace.platform.dto.OrderCreateRequest;
import com.marketplace.platform.dto.OrderResponse;
import com.marketplace.platform.dto.OrderStatusUpdateRequest;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.OrderService;
import com.marketplace.platform.service.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final SecurityUtils securityUtils;

    @PostMapping
    public OrderResponse createOrder(Authentication authentication, @Valid @RequestBody OrderCreateRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return orderService.createOrder(user, request);
    }

    @GetMapping
    public List<OrderResponse> getOrders(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return orderService.getOrders(user);
    }

    @PutMapping("/{id}/status")
    public OrderResponse updateStatus(Authentication authentication, @PathVariable Long id, @Valid @RequestBody OrderStatusUpdateRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return orderService.updateStatus(user, id, request);
    }
}
