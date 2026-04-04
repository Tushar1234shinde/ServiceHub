package com.marketplace.platform.dto;

public record VendorWorkResponse(
        Long id,
        Long vendorId,
        String vendorName,
        boolean vendorVerified,
        String vendorLogoImage,
        String title,
        String description,
        String category,
        String image,
        boolean featured,
        String createdAt
) {}
