package com.marketplace.platform.repository;

import com.marketplace.platform.entity.TransactionLedger;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionLedgerRepository extends JpaRepository<TransactionLedger, Long> {
    List<TransactionLedger> findByUserId(Long userId);
}
