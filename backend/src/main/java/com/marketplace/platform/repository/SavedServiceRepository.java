package com.marketplace.platform.repository;

import com.marketplace.platform.entity.SavedService;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SavedServiceRepository extends JpaRepository<SavedService, Long> {
    List<SavedService> findByClientIdOrderByCreatedAtDesc(Long clientId);
    Optional<SavedService> findByClientIdAndServiceId(Long clientId, Long serviceId);
    boolean existsByClientIdAndServiceId(Long clientId, Long serviceId);
    void deleteByClientIdAndServiceId(Long clientId, Long serviceId);
}
