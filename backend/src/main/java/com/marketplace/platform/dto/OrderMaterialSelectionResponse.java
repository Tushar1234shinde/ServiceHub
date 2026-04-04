package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record OrderMaterialSelectionResponse(
        Long id,
        Long materialOptionId,
        String name,
        String description,
        BigDecimal priceAdjustment
) {}
