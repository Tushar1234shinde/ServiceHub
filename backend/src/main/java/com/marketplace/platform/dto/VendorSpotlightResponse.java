package com.marketplace.platform.dto;

import java.math.BigDecimal;
import java.util.List;

public record VendorSpotlightResponse(
        Long vendorId,
        String name,
        String bio,
        boolean verified,
        BigDecimal rating,
        Long reviewCount,
        Long completedOrders,
        Long activeServices,
        String logoImage,
        List<String> topCategories
) {}
