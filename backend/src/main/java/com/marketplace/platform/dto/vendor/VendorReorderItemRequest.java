package com.marketplace.platform.dto.vendor;

import jakarta.validation.constraints.NotNull;

public record VendorReorderItemRequest(
        @NotNull Long id,
        @NotNull Integer sortOrder
) {}
