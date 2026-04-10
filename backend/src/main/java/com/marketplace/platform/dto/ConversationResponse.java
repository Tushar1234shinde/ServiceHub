package com.marketplace.platform.dto;

import java.util.List;

public record ConversationResponse(
        Long id,
        Long clientId,
        String clientName,
        Long vendorId,
        String vendorName,
        String status,
        Long serviceId,
        Long galleryWorkId,
        String subject,
        String lastMessage,
        String updatedAt,
        List<ConversationMessageResponse> messages
) {}
