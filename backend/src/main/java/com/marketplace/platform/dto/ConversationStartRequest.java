package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ConversationStartRequest(
        @NotNull Long vendorId,
        Long serviceId,
        Long galleryWorkId,
        @Size(max = 500) String subject,
        @NotBlank @Size(max = 2000) String message
) {}
