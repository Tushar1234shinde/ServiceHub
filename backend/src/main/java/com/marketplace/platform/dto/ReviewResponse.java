package com.marketplace.platform.dto;

public record ReviewResponse(Long id, Long orderId, Integer rating, String comment, String clientName, String vendorName, String createdAt) {}
