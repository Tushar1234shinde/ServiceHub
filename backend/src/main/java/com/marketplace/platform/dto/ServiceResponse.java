package com.marketplace.platform.dto;

import java.math.BigDecimal;
import java.util.List;

public record ServiceResponse(
        Long id,
        Long vendorId,
        String vendorName,
        boolean vendorVerified,
        String vendorLogoImage,
        BigDecimal vendorRating,
        String title,
        String description,
        BigDecimal price,
        String category,
        String thumbnailImage,
        List<ServicePricingOptionResponse> pricingOptions,
        List<ServiceMaterialOptionResponse> materialOptions,
        String createdAt
) {}
