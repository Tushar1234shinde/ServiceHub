package com.marketplace.platform.service;

import com.marketplace.platform.entity.User;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.repository.UserRepository;
import com.marketplace.platform.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class SecurityUtils {

    private final UserRepository userRepository;

    public User getCurrentUser(Authentication authentication) {
        if (authentication == null || !(authentication.getPrincipal() instanceof UserPrincipal principal)) {
            throw new BadRequestException("Unauthenticated request");
        }
        return userRepository.findById(principal.getUser().getId())
                .orElseThrow(() -> new BadRequestException("User no longer exists"));
    }
}
