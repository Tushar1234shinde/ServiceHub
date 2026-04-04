package com.marketplace.platform.dto;

import jakarta.validation.constraints.NotBlank;

public record ReviewReplyRequest(@NotBlank String comment) {}
