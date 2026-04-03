package com.marketplace.platform.service;

import com.marketplace.platform.dto.SavedServiceResponse;
import com.marketplace.platform.entity.Role;
import com.marketplace.platform.entity.SavedService;
import com.marketplace.platform.entity.ServiceListing;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.SavedServiceRepository;
import com.marketplace.platform.repository.ServiceListingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientSavedServiceManager {

    private final SavedServiceRepository savedServiceRepository;
    private final ServiceListingRepository serviceListingRepository;

    public List<SavedServiceResponse> getSavedServices(User currentUser) {
        assertClient(currentUser);
        return savedServiceRepository.findByClientIdOrderByCreatedAtDesc(currentUser.getId()).stream()
                .map(this::toResponse)
                .toList();
    }

    public List<Long> getSavedServiceIds(User currentUser) {
        assertClient(currentUser);
        return savedServiceRepository.findByClientIdOrderByCreatedAtDesc(currentUser.getId()).stream()
                .map(saved -> saved.getService().getId())
                .toList();
    }

    @Transactional
    public SavedServiceResponse saveService(User currentUser, Long serviceId) {
        assertClient(currentUser);

        SavedService existing = savedServiceRepository.findByClientIdAndServiceId(currentUser.getId(), serviceId).orElse(null);
        if (existing != null) {
            return toResponse(existing);
        }

        ServiceListing serviceListing = serviceListingRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));

        SavedService savedService = savedServiceRepository.save(SavedService.builder()
                .client(currentUser)
                .service(serviceListing)
                .build());
        return toResponse(savedService);
    }

    @Transactional
    public void removeSavedService(User currentUser, Long serviceId) {
        assertClient(currentUser);
        if (!savedServiceRepository.existsByClientIdAndServiceId(currentUser.getId(), serviceId)) {
            throw new ResourceNotFoundException("Saved service not found");
        }
        savedServiceRepository.deleteByClientIdAndServiceId(currentUser.getId(), serviceId);
    }

    private void assertClient(User currentUser) {
        if (currentUser.getRole() != Role.CLIENT) {
            throw new BadRequestException("Only clients can manage saved services");
        }
    }

    private SavedServiceResponse toResponse(SavedService savedService) {
        ServiceListing service = savedService.getService();
        return new SavedServiceResponse(
                savedService.getId(),
                service.getId(),
                service.getTitle(),
                service.getDescription(),
                service.getPrice(),
                service.getCategory(),
                service.getVendor().getUser().getName(),
                savedService.getCreatedAt().toString()
        );
    }
}
