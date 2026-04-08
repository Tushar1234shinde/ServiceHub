package com.marketplace.platform.dto.vendor;

import java.math.BigDecimal;

public record VendorEarningsOrderResponse(
        Long orderId,
        String serviceTitle,
        String clientName,
        BigDecimal amount,
        String completedAt
) {}
