package com.marketplace.platform.repository;

import com.marketplace.platform.entity.ServiceListing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceListingRepository extends JpaRepository<ServiceListing, Long> {
    List<ServiceListing> findByCategoryContainingIgnoreCase(String category);

    List<ServiceListing> findByTitleContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String title, String description);

    List<ServiceListing> findByVendorUserId(Long userId);

    @Query("select s from ServiceListing s join fetch s.vendor v join fetch v.user")
    List<ServiceListing> findAllWithVendorAndUser();

    @Query("select s from ServiceListing s join fetch s.vendor v join fetch v.user where v.user.id = :userId")
    List<ServiceListing> findAllByVendorUserIdWithVendorAndUser(@Param("userId") Long userId);

    @Query("select s from ServiceListing s join fetch s.vendor v join fetch v.user where v.id = :vendorId")
    List<ServiceListing> findAllByVendorIdWithVendorAndUser(@Param("vendorId") Long vendorId);
}
