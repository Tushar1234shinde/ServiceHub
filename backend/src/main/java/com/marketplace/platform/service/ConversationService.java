package com.marketplace.platform.service;

import com.marketplace.platform.dto.ConversationMessageRequest;
import com.marketplace.platform.dto.ConversationMessageResponse;
import com.marketplace.platform.dto.ConversationResponse;
import com.marketplace.platform.dto.ConversationStartRequest;
import com.marketplace.platform.entity.*;
import com.marketplace.platform.exception.BadRequestException;
import com.marketplace.platform.exception.ResourceNotFoundException;
import com.marketplace.platform.repository.ConversationMessageRepository;
import com.marketplace.platform.repository.ConversationRepository;
import com.marketplace.platform.repository.VendorProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConversationService {

    private final ConversationRepository conversationRepository;
    private final ConversationMessageRepository conversationMessageRepository;
    private final VendorProfileRepository vendorProfileRepository;

    @Transactional(readOnly = true)
    public List<ConversationResponse> getMyConversations(User currentUser) {
        requireClientOrVendor(currentUser);
        return conversationRepository.findAllForUserWithParticipants(currentUser.getId()).stream()
                .map(conversation -> toResponse(conversation, false))
                .toList();
    }

    @Transactional(readOnly = true)
    public ConversationResponse getConversation(User currentUser, Long conversationId) {
        Conversation conversation = conversationRepository.findByIdWithMessages(conversationId)
                .orElseThrow(() -> new ResourceNotFoundException("Conversation not found"));
        requireParticipant(currentUser, conversation);
        return toResponse(conversation, true);
    }

    @Transactional
    public ConversationResponse startConversation(User currentUser, ConversationStartRequest request) {
        if (currentUser.getRole() != Role.CLIENT) {
            throw new BadRequestException("Only client accounts can start a vendor chat");
        }

        VendorProfile vendor = vendorProfileRepository.findByIdWithUser(request.vendorId())
                .orElseThrow(() -> new ResourceNotFoundException("Vendor profile not found"));

        Conversation conversation = findExisting(currentUser, vendor, request)
                .orElseGet(() -> conversationRepository.save(Conversation.builder()
                        .client(currentUser)
                        .vendor(vendor)
                        .status("OPEN")
                        .serviceId(request.serviceId())
                        .galleryWorkId(request.galleryWorkId())
                        .subject(trimToFallback(request.subject(), "Service enquiry"))
                        .build()));

        addMessage(conversation, currentUser, request.message());
        return toResponse(conversationRepository.findByIdWithMessages(conversation.getId()).orElse(conversation), true);
    }

    @Transactional
    public ConversationResponse reply(User currentUser, Long conversationId, ConversationMessageRequest request) {
        Conversation conversation = conversationRepository.findByIdWithMessages(conversationId)
                .orElseThrow(() -> new ResourceNotFoundException("Conversation not found"));
        requireParticipant(currentUser, conversation);
        addMessage(conversation, currentUser, request.message());
        return toResponse(conversation, true);
    }

    private Optional<Conversation> findExisting(User client, VendorProfile vendor, ConversationStartRequest request) {
        if (request.serviceId() != null) {
            return conversationRepository.findByClientIdAndVendorIdAndServiceId(client.getId(), vendor.getId(), request.serviceId());
        }
        if (request.galleryWorkId() != null) {
            return conversationRepository.findByClientIdAndVendorIdAndGalleryWorkId(client.getId(), vendor.getId(), request.galleryWorkId());
        }
        return conversationRepository.findByClientIdAndVendorIdAndSubject(client.getId(), vendor.getId(), trimToFallback(request.subject(), "Service enquiry"));
    }

    private void addMessage(Conversation conversation, User sender, String body) {
        conversation.getMessages().add(conversationMessageRepository.save(ConversationMessage.builder()
                .conversation(conversation)
                .sender(sender)
                .body(body.trim())
                .containsBlockedContact(false)
                .build()));
    }

    private void requireClientOrVendor(User currentUser) {
        if (currentUser.getRole() != Role.CLIENT && currentUser.getRole() != Role.VENDOR) {
            throw new BadRequestException("Only clients and vendors can access chat");
        }
    }

    private void requireParticipant(User currentUser, Conversation conversation) {
        requireClientOrVendor(currentUser);
        boolean client = conversation.getClient().getId().equals(currentUser.getId());
        boolean vendor = conversation.getVendor().getUser().getId().equals(currentUser.getId());
        if (!client && !vendor) {
            throw new BadRequestException("You are not part of this conversation");
        }
    }

    private ConversationResponse toResponse(Conversation conversation, boolean includeMessages) {
        List<ConversationMessage> sortedMessages = conversation.getMessages().stream()
                .sorted(Comparator.comparing(ConversationMessage::getCreatedAt).thenComparing(ConversationMessage::getId))
                .toList();
        String lastMessage = sortedMessages.isEmpty() ? "" : sortedMessages.get(sortedMessages.size() - 1).getBody();

        return new ConversationResponse(
                conversation.getId(),
                conversation.getClient().getId(),
                conversation.getClient().getName(),
                conversation.getVendor().getId(),
                conversation.getVendor().getUser().getName(),
                conversation.getStatus(),
                conversation.getServiceId(),
                conversation.getGalleryWorkId(),
                conversation.getSubject(),
                lastMessage,
                conversation.getUpdatedAt().toString(),
                includeMessages ? sortedMessages.stream().map(this::toMessageResponse).toList() : List.of()
        );
    }

    private ConversationMessageResponse toMessageResponse(ConversationMessage message) {
        return new ConversationMessageResponse(
                message.getId(),
                message.getSender().getId(),
                message.getSender().getName(),
                message.getSender().getRole().name(),
                message.getBody(),
                message.isContainsBlockedContact(),
                message.getCreatedAt().toString()
        );
    }

    private String trimToFallback(String value, String fallback) {
        if (value == null || value.isBlank()) {
            return fallback;
        }
        return value.trim();
    }
}
