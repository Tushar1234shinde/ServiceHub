package com.marketplace.platform.dto;

import com.marketplace.platform.entity.PaymentStatus;

import java.math.BigDecimal;

public record PaymentResponse(Long id, Long orderId, BigDecimal amount, PaymentStatus status, String externalReference, String createdAt) {}
