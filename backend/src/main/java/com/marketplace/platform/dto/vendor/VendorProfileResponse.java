package com.marketplace.platform.dto.vendor;

import java.math.BigDecimal;

public record VendorProfileResponse(
        Long userId,
        Long vendorId,
        String name,
        String email,
        String role,
        String status,
        String profileImage,
        boolean verified,
        BigDecimal rating,
        BigDecimal totalEarnings,
        String bio,
        String logoImage
) {}
