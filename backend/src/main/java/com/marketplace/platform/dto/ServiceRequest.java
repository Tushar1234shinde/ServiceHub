package com.marketplace.platform.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.math.BigDecimal;

public record ServiceRequest(
        @NotBlank String title,
        @NotBlank String description,
        @NotNull @DecimalMin("0.0") BigDecimal price,
        @NotBlank String category
) {}
