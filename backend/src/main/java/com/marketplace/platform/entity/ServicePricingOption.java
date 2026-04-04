package com.marketplace.platform.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "service_pricing_options")
public class ServicePricingOption extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "service_id", nullable = false)
    private ServiceListing service;

    @Column(nullable = false)
    private String label;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(name = "material_included", nullable = false)
    private boolean materialIncluded;

    @Column(name = "default_option", nullable = false)
    private boolean defaultOption;

    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder;
}
