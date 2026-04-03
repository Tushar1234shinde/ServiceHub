package com.marketplace.platform.dto;

import java.math.BigDecimal;

public record SavedServiceResponse(
        Long id,
        Long serviceId,
        String title,
        String description,
        BigDecimal price,
        String category,
        String vendorName,
        String savedAt
) {
}
