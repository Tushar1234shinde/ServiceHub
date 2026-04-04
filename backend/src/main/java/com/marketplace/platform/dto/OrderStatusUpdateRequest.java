package com.marketplace.platform.dto;

import com.marketplace.platform.entity.OrderStatus;
import jakarta.validation.constraints.NotNull;

public record OrderStatusUpdateRequest(@NotNull OrderStatus status, String submissionNote, String statusNote) {}
