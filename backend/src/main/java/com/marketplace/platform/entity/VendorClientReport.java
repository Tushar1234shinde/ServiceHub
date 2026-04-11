package com.marketplace.platform.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(
        name = "vendor_client_reports",
        uniqueConstraints = @UniqueConstraint(
                name = "uk_vendor_client_report_order",
                columnNames = {"vendor_id", "client_id", "order_id"}
        )
)
public class VendorClientReport extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id", nullable = false)
    private VendorProfile vendor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private MarketplaceOrder order;

    @Column(name = "reason_category", nullable = false, length = 120)
    private String reasonCategory;

    @Column(nullable = false, length = 2000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private VendorClientReportStatus status;

    @Column(name = "admin_note", length = 2000)
    private String adminNote;
}
