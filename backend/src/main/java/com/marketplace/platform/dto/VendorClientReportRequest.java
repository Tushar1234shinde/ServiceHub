package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record VendorClientReportRequest(
        @NotNull Long clientId,
        @NotNull Long orderId,
        @NotBlank @Size(max = 120) String reasonCategory,
        @NotBlank @Size(max = 2000) String description
) {}
