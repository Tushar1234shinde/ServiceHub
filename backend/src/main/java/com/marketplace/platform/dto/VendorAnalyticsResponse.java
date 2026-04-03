package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record VendorAnalyticsResponse(
        long totalServices,
        long totalOrders,
        long activeOrders,
        long completedOrders,
        BigDecimal grossOrderValue,
        BigDecimal completedOrderValue,
        BigDecimal averageOrderValue
) {
}
