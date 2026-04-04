package com.marketplace.platform.repository;

import com.marketplace.platform.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findByOrderId(Long orderId);

    @Query("""
            select distinct r from Review r
            join fetch r.order o
            join fetch o.client c
            join fetch o.vendor v
            join fetch v.user vu
            left join fetch r.reply rr
            left join fetch rr.vendor rv
            left join fetch rv.user rvu
            order by r.createdAt desc
            """)
    List<Review> findAllWithAssociations();

    @Query("""
            select distinct r from Review r
            join fetch r.order o
            join fetch o.client c
            join fetch o.vendor v
            join fetch v.user vu
            left join fetch r.reply rr
            left join fetch rr.vendor rv
            left join fetch rv.user rvu
            where v.id = :vendorId
            order by r.createdAt desc
            """)
    List<Review> findAllByVendorIdWithAssociations(@Param("vendorId") Long vendorId);
}
