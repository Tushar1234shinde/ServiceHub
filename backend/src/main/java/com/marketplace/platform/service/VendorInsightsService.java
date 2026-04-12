package com.marketplace.platform.service;

import com.marketplace.platform.dto.VendorAnalyticsResponse;
import com.marketplace.platform.entity.MarketplaceOrder;
import com.marketplace.platform.entity.OrderStatus;
import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.repository.OrderRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;

@Service
@RequiredArgsConstructor
public class VendorInsightsService {

    private final ServiceListingRepository serviceListingRepository;
    private final OrderRepository orderRepository;

    @Transactional(readOnly = true)
    public VendorAnalyticsResponse getMyAnalytics(User currentUser) {
        if (currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only vendors can access analytics");
        }

        List<MarketplaceOrder> orders = orderRepository.findDetailedByVendorUserId(currentUser.getId());
        long totalServices = serviceListingRepository.findByVendorUserId(currentUser.getId()).size();
        long totalOrders = orders.size();
        long activeOrders = orders.stream()
                .filter(order -> order.getStatus() == OrderStatus.PAID || order.getStatus() == OrderStatus.IN_PROGRESS || order.getStatus() == OrderStatus.SUBMITTED)
                .count();
        long completedOrders = orders.stream()
                .filter(order -> order.getStatus() == OrderStatus.COMPLETED)
                .count();

        BigDecimal grossOrderValue = orders.stream()
                .map(MarketplaceOrder::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal completedOrderValue = orders.stream()
                .filter(order -> order.getStatus() == OrderStatus.COMPLETED)
                .map(MarketplaceOrder::getPrice)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal averageOrderValue = totalOrders == 0
                ? BigDecimal.ZERO
                : grossOrderValue.divide(BigDecimal.valueOf(totalOrders), 2, RoundingMode.HALF_UP);

        return new VendorAnalyticsResponse(
                totalServices,
                totalOrders,
                activeOrders,
                completedOrders,
                grossOrderValue,
                completedOrderValue,
                averageOrderValue
        );
    }
}
