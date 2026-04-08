package com.marketplace.platform.repository;

import com.marketplace.platform.entity.ServicePricingOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ServicePricingOptionRepository extends JpaRepository<ServicePricingOption, Long> {

    @Query("""
            select p from ServicePricingOption p
            join fetch p.service s
            join fetch s.vendor v
            join fetch v.user
            where s.id = :serviceId and v.user.id = :userId
            order by p.sortOrder asc, p.id asc
            """)
    List<ServicePricingOption> findAllByServiceIdAndVendorUserId(@Param("serviceId") Long serviceId, @Param("userId") Long userId);

    @Query("""
            select p from ServicePricingOption p
            join fetch p.service s
            join fetch s.vendor v
            join fetch v.user
            where p.id = :pricingOptionId and v.user.id = :userId
            """)
    Optional<ServicePricingOption> findByIdAndVendorUserId(@Param("pricingOptionId") Long pricingOptionId, @Param("userId") Long userId);
}
