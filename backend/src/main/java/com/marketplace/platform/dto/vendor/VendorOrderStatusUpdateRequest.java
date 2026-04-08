package com.marketplace.platform.dto.vendor;

import com.marketplace.platform.entity.OrderStatus;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record VendorOrderStatusUpdateRequest(
        @NotNull OrderStatus status,
        @Size(max = 2000) String statusNote
) {}
