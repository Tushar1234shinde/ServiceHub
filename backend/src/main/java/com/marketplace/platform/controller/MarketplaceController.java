package com.marketplace.platform.controller;

import com.marketplace.platform.dto.MarketplaceHomeResponse;
import com.marketplace.platform.service.MarketplaceHomeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/marketplace")
@RequiredArgsConstructor
public class MarketplaceController {

    private final MarketplaceHomeService marketplaceHomeService;

    @GetMapping("/homepage")
    public MarketplaceHomeResponse getHomepage() {
        return marketplaceHomeService.getHomepage();
    }
}
