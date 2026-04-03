package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotNull;

public record PaymentReleaseRequest(@NotNull Long orderId) {}
