package com.marketplace.platform.repository;

import com.marketplace.platform.entity.VendorWork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VendorWorkRepository extends JpaRepository<VendorWork, Long> {
    @Query("select w from VendorWork w join fetch w.vendor v join fetch v.user order by w.createdAt desc")
    List<VendorWork> findAllWithVendorAndUserOrderByCreatedAtDesc();

    @Query("select w from VendorWork w join fetch w.vendor v join fetch v.user where v.id = :vendorId order by w.createdAt desc")
    List<VendorWork> findByVendorIdWithVendorAndUserOrderByCreatedAtDesc(@Param("vendorId") Long vendorId);

    @Query("select w from VendorWork w join fetch w.vendor v join fetch v.user where v.user.id = :userId order by w.createdAt desc")
    List<VendorWork> findByVendorUserIdWithVendorAndUserOrderByCreatedAtDesc(@Param("userId") Long userId);

    Optional<VendorWork> findByIdAndVendorUserId(Long workId, Long userId);
}
