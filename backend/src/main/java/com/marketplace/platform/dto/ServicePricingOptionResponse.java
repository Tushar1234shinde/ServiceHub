package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record ServicePricingOptionResponse(
        Long id,
        String label,
        String description,
        BigDecimal price,
        boolean materialIncluded,
        boolean defaultOption,
        Integer sortOrder
) {}
