package com.marketplace.platform.dto;

import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.UserStatus;

public record AuthResponse(
        Long userId,
        String name,
        String email,
        Role role,
        UserStatus status,
        boolean verified,
        String profileImage,
        String accessToken,
        String refreshToken
) {}
