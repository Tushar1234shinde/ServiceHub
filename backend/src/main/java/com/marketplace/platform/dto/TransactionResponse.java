package com.marketplace.platform.dto;

import com.marketplace.platform.entity.TransactionType;

import java.math.BigDecimal;

public record TransactionResponse(
        Long id,
        Long userId,
        String userName,
        TransactionType type,
        BigDecimal amount,
        String referenceId,
        String description,
        String createdAt
) {
}
