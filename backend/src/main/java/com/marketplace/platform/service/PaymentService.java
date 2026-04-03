package com.marketplace.platform.service;

import com.marketplace.platform.dto.PaymentCreateRequest;
import com.marketplace.platform.dto.PaymentReleaseRequest;
import com.marketplace.platform.dto.PaymentResponse;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.PaymentRepository;
import com.marketplace.platform.repository.TransactionLedgerRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;
    private final TransactionLedgerRepository transactionLedgerRepository;
    private final VendorProfileRepository vendorProfileRepository;

    @Transactional
    public PaymentResponse createEscrowPayment(User client, PaymentCreateRequest request) {
        if (client.getRole() != Role.CLIENT) {
            throw new BadRequestException("Only clients can fund escrow");
        }

        MarketplaceOrder order = orderRepository.findById(request.orderId())
                .orElseThrow(() -> new ResourceNotFoundException("Order not found"));
        if (!order.getClient().getId().equals(client.getId())) {
            throw new BadRequestException("Only the client can fund escrow");
        }

        String idempotencyKey = request.idempotencyKey().trim();
        var existing = paymentRepository.findByExternalReference(idempotencyKey);
        if (existing.isPresent()) {
            Payment existingPayment = existing.get();
            if (!existingPayment.getOrder().getId().equals(order.getId())) {
                throw new BadRequestException("Idempotency key is already used for another order");
            }
            return toResponse(existingPayment);
        }

        if (order.getStatus() != OrderStatus.CREATED) {
            throw new BadRequestException("Payment can only be created for new orders");
        }

        Payment payment = paymentRepository.save(Payment.builder()
                .order(order)
                .amount(order.getPrice())
                .status(PaymentStatus.HELD)
                .externalReference(idempotencyKey)
                .build());

        order.setStatus(OrderStatus.PAID);
        transactionLedgerRepository.save(TransactionLedger.builder()
                .user(client)
                .type(TransactionType.DEBIT)
                .amount(order.getPrice())
                .referenceId("PAY-" + payment.getId())
                .description("Escrow funded for order #" + order.getId())
                .build());
        return toResponse(payment);
    }

    @Transactional
    public PaymentResponse releaseEscrow(PaymentReleaseRequest request) {
        Payment payment = paymentRepository.findByOrderId(request.orderId())
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found"));
        MarketplaceOrder order = payment.getOrder();
        if (payment.getStatus() != PaymentStatus.HELD) {
            throw new BadRequestException("Payment has already been settled");
        }
        if (order.getStatus() != OrderStatus.APPROVED) {
            throw new BadRequestException("Order must be approved before releasing payment");
        }

        payment.setStatus(PaymentStatus.RELEASED);
        order.setStatus(OrderStatus.COMPLETED);

        VendorProfile vendor = order.getVendor();
        vendor.setTotalEarnings(vendor.getTotalEarnings().add(payment.getAmount()));
        vendorProfileRepository.save(vendor);

        transactionLedgerRepository.save(TransactionLedger.builder()
                .user(vendor.getUser())
                .type(TransactionType.CREDIT)
                .amount(payment.getAmount())
                .referenceId("PAY-" + payment.getId())
                .description("Escrow released for order #" + order.getId())
                .build());
        return toResponse(payment);
    }

    public PaymentResponse getByOrder(Long orderId) {
        Payment payment = paymentRepository.findByOrderId(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Payment not found"));
        return toResponse(payment);
    }

    private PaymentResponse toResponse(Payment payment) {
        return new PaymentResponse(
                payment.getId(),
                payment.getOrder().getId(),
                payment.getAmount(),
                payment.getStatus(),
                payment.getExternalReference(),
                payment.getCreatedAt().toString()
        );
    }
}
