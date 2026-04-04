package com.marketplace.platform.dto;

import java.util.List;

public record MarketplaceHomeResponse(
        List<VendorSpotlightResponse> topVendors,
        List<VendorWorkResponse> recentWorks,
        List<ReviewResponse> testimonials
) {}
