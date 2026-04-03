package com.marketplace.platform.config;

import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.entity.UserStatus;
import com.marketplace.platform.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableConfigurationProperties(AppProperties.class)
@RequiredArgsConstructor
public class ApplicationConfig {

    @Bean
    CommandLineRunner seedAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> userRepository.findByEmail("admin@marketplace.local")
                .orElseGet(() -> userRepository.save(User.builder()
                        .name("Platform Admin")
                        .email("admin@marketplace.local")
                        .password(passwordEncoder.encode("Admin@123"))
                        .role(Role.ADMIN)
                        .status(UserStatus.ACTIVE)
                        .build()));
    }
}
