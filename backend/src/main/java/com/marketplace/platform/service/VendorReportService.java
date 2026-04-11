package com.marketplace.platform.service;

import com.marketplace.platform.dto.AdminReportStatusUpdateRequest;
import com.marketplace.platform.dto.VendorClientReportRequest;
import com.marketplace.platform.dto.VendorClientReportResponse;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.VendorClientReportRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorReportService {

    private final VendorClientReportRepository vendorClientReportRepository;
    private final VendorProfileRepository vendorProfileRepository;
    private final OrderRepository orderRepository;

    @Transactional
    public VendorClientReportResponse createReport(User currentUser, VendorClientReportRequest request) {
        VendorProfile vendor = requireVendor(currentUser);
        MarketplaceOrder order = orderRepository.findDetailedByIdAndVendorUserId(request.orderId(), currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));

        if (!order.getClient().getId().equals(request.clientId())) {
            throw new BadRequestException("The selected client does not belong to this order");
        }
        if (vendorClientReportRepository.existsByVendorIdAndClientIdAndOrderId(vendor.getId(), request.clientId(), request.orderId())) {
            throw new BadRequestException("A report has already been submitted for this client and order");
        }

        VendorClientReport report = vendorClientReportRepository.save(VendorClientReport.builder()
                .vendor(vendor)
                .client(order.getClient())
                .order(order)
                .reasonCategory(request.reasonCategory().trim())
                .description(request.description().trim())
                .status(VendorClientReportStatus.PENDING)
                .build());

        return toResponse(report);
    }

    @Transactional(readOnly = true)
    public List<VendorClientReportResponse> getVendorReports(User currentUser) {
        requireVendor(currentUser);
        return vendorClientReportRepository.findAllByVendorUserId(currentUser.getId()).stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<VendorClientReportResponse> getAdminReports(VendorClientReportStatus status) {
        List<VendorClientReport> reports = status == null
                ? vendorClientReportRepository.findAllDetailed()
                : vendorClientReportRepository.findAllDetailedByStatus(status);
        return reports.stream().map(this::toResponse).toList();
    }

    @Transactional
    public VendorClientReportResponse updateReportStatus(Long reportId, AdminReportStatusUpdateRequest request) {
        VendorClientReport report = vendorClientReportRepository.findDetailedById(reportId)
                .orElseThrow(() -> new ResourceNotFoundException("Report not found"));
        report.setStatus(request.status());
        report.setAdminNote(trimToNull(request.adminNote()));
        return toResponse(report);
    }

    private VendorProfile requireVendor(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can access reporting");
        }
        return vendorProfileRepository.findByUserId(currentUser.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
    }

    private VendorClientReportResponse toResponse(VendorClientReport report) {
        return new VendorClientReportResponse(
                report.getId(),
                report.getVendor().getId(),
                report.getVendor().getUser().getName(),
                report.getClient().getId(),
                report.getClient().getName(),
                report.getOrder().getId(),
                report.getOrder().getService().getId(),
                report.getOrder().getService().getTitle(),
                report.getReasonCategory(),
                report.getDescription(),
                report.getStatus(),
                report.getAdminNote(),
                report.getCreatedAt().toString(),
                report.getUpdatedAt().toString()
        );
    }

    private String trimToNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
