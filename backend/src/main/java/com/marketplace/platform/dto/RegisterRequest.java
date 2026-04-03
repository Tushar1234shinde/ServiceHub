package com.marketplace.platform.dto;

import com.marketplace.platform.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterRequest(
        @NotBlank String name,
        @Email @NotBlank String email,
        @Size(min = 8, message = "Password must be at least 8 characters") String password,
        @NotNull Role role,
        String bio,
        String profileImage,
        String logoImage
) {}
