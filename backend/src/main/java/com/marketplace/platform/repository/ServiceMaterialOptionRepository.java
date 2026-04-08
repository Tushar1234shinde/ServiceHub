package com.marketplace.platform.repository;

import com.marketplace.platform.entity.ServiceMaterialOption;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ServiceMaterialOptionRepository extends JpaRepository<ServiceMaterialOption, Long> {

    @Query("""
            select m from ServiceMaterialOption m
            join fetch m.service s
            join fetch s.vendor v
            join fetch v.user
            where s.id = :serviceId and v.user.id = :userId
            order by m.sortOrder asc, m.id asc
            """)
    List<ServiceMaterialOption> findAllByServiceIdAndVendorUserId(@Param("serviceId") Long serviceId, @Param("userId") Long userId);

    @Query("""
            select m from ServiceMaterialOption m
            join fetch m.service s
            join fetch s.vendor v
            join fetch v.user
            where m.id = :materialOptionId and v.user.id = :userId
            """)
    Optional<ServiceMaterialOption> findByIdAndVendorUserId(@Param("materialOptionId") Long materialOptionId, @Param("userId") Long userId);
}
