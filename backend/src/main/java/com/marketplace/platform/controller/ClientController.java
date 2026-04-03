package com.marketplace.platform.controller;

import com.marketplace.platform.dto.SavedServiceResponse;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.ClientSavedServiceManager;
import com.marketplace.platform.service.SecurityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientSavedServiceManager clientSavedServiceManager;
    private final SecurityUtils securityUtils;

    @GetMapping("/me/saved-services")
    public List<SavedServiceResponse> getMySavedServices(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return clientSavedServiceManager.getSavedServices(user);
    }

    @GetMapping("/me/saved-service-ids")
    public List<Long> getMySavedServiceIds(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return clientSavedServiceManager.getSavedServiceIds(user);
    }

    @PostMapping("/me/saved-services/{serviceId}")
    public SavedServiceResponse saveService(Authentication authentication, @PathVariable Long serviceId) {
        User user = securityUtils.getCurrentUser(authentication);
        return clientSavedServiceManager.saveService(user, serviceId);
    }

    @DeleteMapping("/me/saved-services/{serviceId}")
    public ResponseEntity<Void> removeSavedService(Authentication authentication, @PathVariable Long serviceId) {
        User user = securityUtils.getCurrentUser(authentication);
        clientSavedServiceManager.removeSavedService(user, serviceId);
        return ResponseEntity.noContent().build();
    }
}
