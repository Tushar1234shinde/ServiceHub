package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ConversationMessageRequest(
        @NotBlank @Size(max = 2000) String message
) {}
