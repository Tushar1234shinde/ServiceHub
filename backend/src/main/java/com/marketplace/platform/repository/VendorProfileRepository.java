package com.marketplace.platform.repository;

import com.marketplace.platform.entity.VendorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VendorProfileRepository extends JpaRepository<VendorProfile, Long> {
    Optional<VendorProfile> findByUserId(Long userId);

    @Query("select v from VendorProfile v join fetch v.user")
    List<VendorProfile> findAllWithUser();

    @Query("select v from VendorProfile v join fetch v.user where v.id = :vendorId")
    Optional<VendorProfile> findByIdWithUser(@Param("vendorId") Long vendorId);
}
