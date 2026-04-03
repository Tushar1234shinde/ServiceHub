package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record ServiceResponse(
        Long id,
        Long vendorId,
        String vendorName,
        boolean vendorVerified,
        String title,
        String description,
        BigDecimal price,
        String category,
        String createdAt
) {}
