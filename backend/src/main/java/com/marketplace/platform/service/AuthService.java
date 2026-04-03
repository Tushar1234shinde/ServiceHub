package com.marketplace.platform.service;

import com.marketplace.platform.dto.*;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.repository.RefreshTokenRepository;
import com.marketplace.platform.repository.UserRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import com.marketplace.platform.security.JwtService;
import com.marketplace.platform.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final VendorProfileRepository vendorProfileRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        if (request.role() == Role.ADMIN) {
            throw new BadRequestException("Admin registration is not allowed");
        }
        if (userRepository.findByEmail(request.email()).isPresent()) {
            throw new BadRequestException("Email already registered");
        }

        User user = userRepository.save(User.builder()
                .name(request.name())
                .email(request.email())
                .password(passwordEncoder.encode(request.password()))
                .role(request.role())
                .status(UserStatus.ACTIVE)
                .profileImage(request.role() == Role.CLIENT ? request.profileImage() : null)
                .build());

        if (request.role() == Role.VENDOR) {
            vendorProfileRepository.save(VendorProfile.builder()
                    .user(user)
                    .verified(false)
                    .rating(BigDecimal.ZERO)
                    .totalEarnings(BigDecimal.ZERO)
                    .bio(request.bio())
                    .logoImage(request.logoImage())
                    .build());
        }

        return buildAuthResponse(user);
    }

    @Transactional
    public AuthResponse login(AuthRequest request) {
        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() -> new BadRequestException("Invalid credentials"));
        if (user.getStatus() == UserStatus.SUSPENDED) {
            throw new BadRequestException("Account is suspended. Please contact support.");
        }

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(), request.password()));
        } catch (AuthenticationException ex) {
            throw new BadRequestException("Invalid credentials");
        }

        return buildAuthResponse(user);
    }

    @Transactional
    public AuthResponse refresh(RefreshTokenRequest request) {
        RefreshToken refreshToken = refreshTokenRepository.findByTokenAndRevokedFalse(request.refreshToken())
                .orElseThrow(() -> new BadRequestException("Invalid refresh token"));
        if (refreshToken.getExpiresAt().isBefore(LocalDateTime.now())) {
            throw new BadRequestException("Refresh token expired");
        }
        refreshToken.setRevoked(true);
        return buildAuthResponse(refreshToken.getUser());
    }

    private AuthResponse buildAuthResponse(User user) {
        UserPrincipal principal = new UserPrincipal(user);
        String accessToken = jwtService.generateAccessToken(principal);
        String refreshToken = jwtService.generateRefreshToken(principal);
        refreshTokenRepository.save(RefreshToken.builder()
                .user(user)
                .token(refreshToken)
                .expiresAt(LocalDateTime.now().plusDays(7))
                .revoked(false)
                .build());

        boolean verified = user.getRole() == Role.VENDOR && user.getVendorProfile() != null && user.getVendorProfile().isVerified();
        String image = verified && user.getVendorProfile() != null
                ? user.getVendorProfile().getLogoImage()
                : user.getRole() == Role.VENDOR && user.getVendorProfile() != null
                    ? user.getVendorProfile().getLogoImage()
                    : user.getProfileImage();

        return new AuthResponse(user.getId(), user.getName(), user.getEmail(), user.getRole(), user.getStatus(), verified, image, accessToken, refreshToken);
    }
}
