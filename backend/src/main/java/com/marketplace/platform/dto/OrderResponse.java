package com.marketplace.platform.dto;

import com.marketplace.platform.entity.OrderStatus;

import java.math.BigDecimal;
import java.util.List;

public record OrderResponse(
        Long id,
        Long clientId,
        String clientName,
        Long vendorId,
        String vendorName,
        Long serviceId,
        String serviceTitle,
        OrderStatus status,
        BigDecimal price,
        String workSubmission,
        String preferredDate,
        String selectedPricingOptionLabel,
        boolean materialIncluded,
        String clientNote,
        String statusNote,
        List<OrderMaterialSelectionResponse> selectedMaterialOptions,
        List<OrderAttachmentResponse> attachments,
        String createdAt
) {}
