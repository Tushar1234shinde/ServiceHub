package com.marketplace.platform.dto;

import com.marketplace.platform.entity.VendorClientReportStatus;

public record VendorClientReportResponse(
        Long id,
        Long vendorId,
        String vendorName,
        Long clientId,
        String clientName,
        Long orderId,
        Long serviceId,
        String serviceTitle,
        String reasonCategory,
        String description,
        VendorClientReportStatus status,
        String adminNote,
        String createdAt,
        String updatedAt
) {}
