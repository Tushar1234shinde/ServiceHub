package com.marketplace.platform.security;

import com.marketplace.platform.config.AppProperties;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

@Service
public class JwtService {

    private final AppProperties appProperties;

    public JwtService(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public String generateAccessToken(UserPrincipal principal) {
        return buildToken(principal.getUsername(), Map.of("role", principal.getUser().getRole().name()), appProperties.getJwt().getAccessTokenExpirationMs());
    }

    public String generateRefreshToken(UserPrincipal principal) {
        return buildToken(
                principal.getUsername(),
                Map.of("type", "refresh", "jti", UUID.randomUUID().toString()),
                appProperties.getJwt().getRefreshTokenExpirationMs()
        );
    }

    public String extractUsername(String token) {
        return parseClaims(token).getSubject();
    }

    public boolean isTokenValid(String token, UserPrincipal principal) {
        return extractUsername(token).equals(principal.getUsername()) && parseClaims(token).getExpiration().after(new Date());
    }

    private String buildToken(String subject, Map<String, Object> claims, long expirationMs) {
        Instant now = Instant.now();
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(Date.from(now))
                .expiration(Date.from(now.plusMillis(expirationMs)))
                .signWith(getSigningKey())
                .compact();
    }

    private Claims parseClaims(String token) {
        return Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(token).getPayload();
    }

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(java.util.Base64.getEncoder().encodeToString(appProperties.getJwt().getSecret().getBytes()));
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
