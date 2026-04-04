package com.marketplace.platform.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "order_request_attachments")
public class OrderRequestAttachment extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id", nullable = false)
    private MarketplaceOrder order;

    @Lob
    @Column(name = "image_data", nullable = false)
    private String imageData;

    @Column(length = 255)
    private String caption;

    @Column(name = "sort_order", nullable = false)
    private Integer sortOrder;
}
