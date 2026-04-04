package com.marketplace.platform.dto;

public record ReviewResponse(
        Long id,
        Long orderId,
        Long vendorId,
        Integer rating,
        String comment,
        String clientName,
        String clientImage,
        String vendorName,
        String createdAt,
        ReviewReplyResponse reply
) {}
