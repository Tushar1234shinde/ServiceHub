package com.marketplace.platform.dto;

import com.marketplace.platform.entity.VendorClientReportStatus;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record AdminReportStatusUpdateRequest(
        @NotNull VendorClientReportStatus status,
        @Size(max = 2000) String adminNote
) {}
