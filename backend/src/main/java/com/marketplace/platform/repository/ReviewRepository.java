package com.marketplace.platform.repository;

import com.marketplace.platform.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByOrderVendorId(Long vendorId);
}
