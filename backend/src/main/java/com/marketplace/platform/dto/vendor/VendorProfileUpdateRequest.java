package com.marketplace.platform.dto.vendor;

import jakarta.validation.constraints.Size;

public record VendorProfileUpdateRequest(
        @Size(max = 500) String bio,
        String logoImage
) {}
