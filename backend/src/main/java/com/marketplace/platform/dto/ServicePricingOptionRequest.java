package com.marketplace.platform.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record ServicePricingOptionRequest(
        @NotBlank String label,
        String description,
        @NotNull @DecimalMin(value = "0.0", inclusive = false) BigDecimal price,
        boolean materialIncluded,
        boolean defaultOption,
        Integer sortOrder
) {}
