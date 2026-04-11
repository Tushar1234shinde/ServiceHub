package com.marketplace.platform.repository;

import com.marketplace.platform.entity.VendorClientReport;
import com.marketplace.platform.entity.VendorClientReportStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VendorClientReportRepository extends JpaRepository<VendorClientReport, Long> {

    boolean existsByVendorIdAndClientIdAndOrderId(Long vendorId, Long clientId, Long orderId);

    @Query("""
            select distinct r from VendorClientReport r
            join fetch r.vendor v
            join fetch v.user vu
            join fetch r.client c
            join fetch r.order o
            join fetch o.service s
            where vu.id = :vendorUserId
            order by r.createdAt desc
            """)
    List<VendorClientReport> findAllByVendorUserId(@Param("vendorUserId") Long vendorUserId);

    @Query("""
            select distinct r from VendorClientReport r
            join fetch r.vendor v
            join fetch v.user vu
            join fetch r.client c
            join fetch r.order o
            join fetch o.service s
            order by r.createdAt desc
            """)
    List<VendorClientReport> findAllDetailed();

    @Query("""
            select distinct r from VendorClientReport r
            join fetch r.vendor v
            join fetch v.user vu
            join fetch r.client c
            join fetch r.order o
            join fetch o.service s
            where r.status = :status
            order by r.createdAt desc
            """)
    List<VendorClientReport> findAllDetailedByStatus(@Param("status") VendorClientReportStatus status);

    @Query("""
            select r from VendorClientReport r
            join fetch r.vendor v
            join fetch v.user
            join fetch r.client c
            join fetch r.order o
            join fetch o.service s
            where r.id = :reportId
            """)
    Optional<VendorClientReport> findDetailedById(@Param("reportId") Long reportId);
}
