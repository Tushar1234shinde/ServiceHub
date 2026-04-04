package com.marketplace.platform.repository;

import com.marketplace.platform.entity.MarketplaceOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<MarketplaceOrder, Long> {
    List<MarketplaceOrder> findByClientId(Long clientId);

    List<MarketplaceOrder> findByVendorUserId(Long vendorUserId);

    List<MarketplaceOrder> findByVendorId(Long vendorId);
}
