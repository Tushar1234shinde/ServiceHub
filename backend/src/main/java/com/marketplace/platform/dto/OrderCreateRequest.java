package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record OrderCreateRequest(
        @NotNull Long serviceId,
        LocalDate preferredDate
) {}
