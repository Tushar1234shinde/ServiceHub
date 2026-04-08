package com.marketplace.platform.dto.vendor;

import java.math.BigDecimal;

public record VendorOverviewStatsResponse(
        boolean verified,
        BigDecimal rating,
        BigDecimal totalEarnings,
        long totalServices,
        long activeServices,
        long totalOrders,
        long openOrders,
        long completedOrders
) {}
