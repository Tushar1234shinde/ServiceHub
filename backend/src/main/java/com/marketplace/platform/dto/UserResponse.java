package com.marketplace.platform.dto;

import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.UserStatus;

public record UserResponse(Long id, String name, String email, Role role, UserStatus status, boolean verified) {}
