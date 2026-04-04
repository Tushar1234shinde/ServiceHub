package com.marketplace.platform.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class MarketplaceOrder extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "vendor_id", nullable = false)
    private VendorProfile vendor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id", nullable = false)
    private ServiceListing service;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "pricing_option_id")
    private ServicePricingOption pricingOption;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private OrderStatus status;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(name = "preferred_date")
    private LocalDate preferredDate;

    @Column(name = "selected_pricing_option_label")
    private String selectedPricingOptionLabel;

    @Column(name = "material_included", nullable = false)
    private boolean materialIncluded;

    @Column(name = "client_note", length = 2000)
    private String clientNote;

    @Column(name = "status_note", length = 2000)
    private String statusNote;

    @Column(length = 2000)
    private String workSubmission;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("sortOrder ASC, id ASC")
    @Builder.Default
    private List<OrderRequestAttachment> attachments = new ArrayList<>();

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @OrderBy("id ASC")
    @Builder.Default
    private List<OrderSelectedMaterialOption> selectedMaterialOptions = new ArrayList<>();
}
