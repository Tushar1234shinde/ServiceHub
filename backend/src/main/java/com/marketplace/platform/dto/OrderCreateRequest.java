package com.marketplace.platform.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

public record OrderCreateRequest(
        @NotNull Long serviceId,
        Long pricingOptionId,
        List<Long> materialOptionIds,
        @Valid List<OrderAttachmentRequest> attachments,
        LocalDate preferredDate,
        String clientNote
) {}
