package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;

public record VendorWorkRequest(
        @NotBlank String title,
        @NotBlank String description,
        @NotBlank String category,
        @NotBlank String image,
        boolean featured
) {}
