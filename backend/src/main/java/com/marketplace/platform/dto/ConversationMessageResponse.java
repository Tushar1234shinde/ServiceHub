package com.marketplace.platform.dto;

public record ConversationMessageResponse(
        Long id,
        Long senderUserId,
        String senderName,
        String senderRole,
        String body,
        boolean containsBlockedContact,
        String createdAt
) {}
