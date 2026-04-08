package com.marketplace.platform.dto.vendor;

import java.math.BigDecimal;
import java.util.List;

public record VendorEarningsResponse(
        BigDecimal totalEarnings,
        List<VendorEarningsOrderResponse> completedOrders
) {}
