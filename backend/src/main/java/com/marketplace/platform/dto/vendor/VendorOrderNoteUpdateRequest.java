package com.marketplace.platform.dto.vendor;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record VendorOrderNoteUpdateRequest(
        @NotBlank @Size(max = 2000) String statusNote
) {}
