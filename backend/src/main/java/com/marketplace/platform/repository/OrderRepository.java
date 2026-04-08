package com.marketplace.platform.repository;

import com.marketplace.platform.entity.MarketplaceOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<MarketplaceOrder, Long> {
    List<MarketplaceOrder> findByClientId(Long clientId);

    List<MarketplaceOrder> findByVendorUserId(Long vendorUserId);

    List<MarketplaceOrder> findByVendorId(Long vendorId);

    @Query("""
            select o from MarketplaceOrder o
            join fetch o.client c
            join fetch o.vendor v
            join fetch v.user
            join fetch o.service s
            left join fetch o.pricingOption
            where v.user.id = :userId
            order by o.createdAt desc
            """)
    List<MarketplaceOrder> findDetailedByVendorUserId(@Param("userId") Long userId);

    @Query("""
            select o from MarketplaceOrder o
            join fetch o.client c
            join fetch o.vendor v
            join fetch v.user
            join fetch o.service s
            left join fetch o.pricingOption
            where o.id = :orderId and v.user.id = :userId
            """)
    Optional<MarketplaceOrder> findDetailedByIdAndVendorUserId(@Param("orderId") Long orderId, @Param("userId") Long userId);
}
