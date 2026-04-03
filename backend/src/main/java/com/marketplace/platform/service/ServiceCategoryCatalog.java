package com.marketplace.platform.service;

import com.marketplace.platform.exception.BadRequestException;

import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public final class ServiceCategoryCatalog {

    public static final String PAINTING = "Painting";
    public static final String WINDOW_MAKING = "Window Making";
    public static final String PLASTERING = "Plastering";
    public static final String POP_FALSE_CEILING = "POP / False Ceiling";
    public static final String PVC_MODULAR_WORK = "PVC / Modular Work";
    public static final String RENOVATION = "Renovation";
    public static final String MAINTENANCE_SERVICES = "Maintenance, repairs, cleaning, and installation services";

    public static final List<String> ALLOWED_CATEGORIES = List.of(
            PAINTING,
            WINDOW_MAKING,
            PLASTERING,
            POP_FALSE_CEILING,
            PVC_MODULAR_WORK,
            RENOVATION,
            MAINTENANCE_SERVICES
    );

    private static final Map<String, String> NORMALIZED_TO_CANONICAL = ALLOWED_CATEGORIES.stream()
            .collect(Collectors.toMap(ServiceCategoryCatalog::normalizeKey, Function.identity()));

    private ServiceCategoryCatalog() {
    }

    public static String requireCanonicalCategory(String rawCategory) {
        if (rawCategory == null || rawCategory.isBlank()) {
            throw new BadRequestException("Category is required");
        }
        String canonical = NORMALIZED_TO_CANONICAL.get(normalizeKey(rawCategory));
        if (canonical == null) {
            throw new BadRequestException("Unsupported category. Use one of the platform core categories.");
        }
        return canonical;
    }

    private static String normalizeKey(String value) {
        return value.trim().toLowerCase(Locale.ROOT);
    }
}
