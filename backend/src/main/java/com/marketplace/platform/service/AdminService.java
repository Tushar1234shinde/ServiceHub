package com.marketplace.platform.service;

import com.marketplace.platform.dto.TransactionResponse;
import com.marketplace.platform.dto.UserResponse;
import com.marketplace.platform.entity.TransactionLedger;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.entity.UserStatus;
import com.marketplace.platform.entity.VendorProfile;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.TransactionLedgerRepository;
import com.marketplace.platform.repository.UserRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final VendorProfileRepository vendorProfileRepository;
    private final TransactionLedgerRepository transactionLedgerRepository;

    public List<UserResponse> getUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserResponse(
                        user.getId(),
                        user.getName(),
                        user.getEmail(),
                        user.getRole(),
                        user.getStatus(),
                        user.getVendorProfile() != null && user.getVendorProfile().isVerified()
                ))
                .toList();
    }

    @Transactional
    public UserResponse approveVendor(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        VendorProfile vendor = vendorProfileRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));
        vendor.setVerified(true);
        user.setStatus(UserStatus.ACTIVE);
        return new UserResponse(user.getId(), user.getName(), user.getEmail(), user.getRole(), user.getStatus(), true);
    }

    @Transactional
    public UserResponse suspendUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        user.setStatus(UserStatus.SUSPENDED);
        return new UserResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole(),
                user.getStatus(),
                user.getVendorProfile() != null && user.getVendorProfile().isVerified()
        );
    }

    @Transactional(readOnly = true)
    public List<TransactionResponse> getTransactions() {
        return transactionLedgerRepository.findAll().stream()
                .map(this::toResponse)
                .toList();
    }

    private TransactionResponse toResponse(TransactionLedger transaction) {
        Long userId = transaction.getUser() != null ? transaction.getUser().getId() : null;
        String userName = transaction.getUser() != null ? transaction.getUser().getName() : "SYSTEM";

        return new TransactionResponse(
                transaction.getId(),
                userId,
                userName,
                transaction.getType(),
                transaction.getAmount(),
                transaction.getReferenceId(),
                transaction.getDescription(),
                transaction.getCreatedAt().toString()
        );
    }
}
