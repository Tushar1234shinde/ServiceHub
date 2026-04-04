package com.marketplace.platform.dto;

import java.math.BigDecimal;
import java.util.List;

public record VendorPublicProfileResponse(
        Long vendorId,
        String name,
        boolean verified,
        BigDecimal rating,
        Long reviewCount,
        Long completedOrders,
        Long activeServices,
        String bio,
        String logoImage,
        List<ServiceResponse> services,
        List<VendorWorkResponse> works,
        List<ReviewResponse> reviews
) {}
