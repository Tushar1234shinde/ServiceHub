package com.marketplace.platform.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;
import java.util.List;

public record ServiceRequest(
        @NotBlank String title,
        @NotBlank String description,
        @NotNull @DecimalMin(value = "0.0", inclusive = false) BigDecimal price,
        @NotBlank String category,
        String thumbnailImage,
        @Valid List<ServicePricingOptionRequest> pricingOptions,
        @Valid List<ServiceMaterialOptionRequest> materialOptions
) {}
