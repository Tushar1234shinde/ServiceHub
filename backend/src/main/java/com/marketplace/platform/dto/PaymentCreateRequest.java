package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PaymentCreateRequest(@NotNull Long orderId, @NotBlank String idempotencyKey) {}
