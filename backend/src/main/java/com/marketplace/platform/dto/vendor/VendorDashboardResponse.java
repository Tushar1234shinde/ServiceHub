package com.marketplace.platform.dto.vendor;

import com.marketplace.platform.dto.OrderResponse;

import java.util.List;

public record VendorDashboardResponse(
        VendorProfileResponse profile,
        VendorOverviewStatsResponse stats,
        List<OrderResponse> recentOrders
) {}
