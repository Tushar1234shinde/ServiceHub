package com.marketplace.platform.dto.vendor;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;

import java.util.List;

public record VendorReorderRequest(
        @Valid @NotEmpty List<VendorReorderItemRequest> items
) {}
