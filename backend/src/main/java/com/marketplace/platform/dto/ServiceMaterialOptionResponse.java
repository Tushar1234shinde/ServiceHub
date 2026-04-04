package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record ServiceMaterialOptionResponse(
        Long id,
        String name,
        String description,
        BigDecimal priceAdjustment,
        boolean defaultSelected,
        boolean active,
        Integer sortOrder
) {}
