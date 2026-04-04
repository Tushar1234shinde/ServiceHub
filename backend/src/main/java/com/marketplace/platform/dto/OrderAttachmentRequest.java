package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;

public record OrderAttachmentRequest(@NotBlank String imageData, String caption) {}
