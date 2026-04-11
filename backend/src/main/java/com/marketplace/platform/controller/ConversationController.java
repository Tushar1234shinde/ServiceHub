package com.marketplace.platform.controller;

import com.marketplace.platform.dto.ConversationMessageRequest;
import com.marketplace.platform.dto.ConversationResponse;
import com.marketplace.platform.dto.ConversationStartRequest;
import com.marketplace.platform.entity.User;
import com.marketplace.platform.service.ConversationService;
import com.marketplace.platform.service.SecurityUtils;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversations")
@RequiredArgsConstructor
public class ConversationController {

    private final ConversationService conversationService;
    private final SecurityUtils securityUtils;

    @GetMapping
    public List<ConversationResponse> getMyConversations(Authentication authentication) {
        User user = securityUtils.getCurrentUser(authentication);
        return conversationService.getMyConversations(user);
    }

    @GetMapping("/{conversationId}")
    public ConversationResponse getConversation(Authentication authentication, @PathVariable Long conversationId) {
        User user = securityUtils.getCurrentUser(authentication);
        return conversationService.getConversation(user, conversationId);
    }

    @PostMapping
    public ConversationResponse startConversation(Authentication authentication, @Valid @RequestBody ConversationStartRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return conversationService.startConversation(user, request);
    }

    @PostMapping("/{conversationId}/messages")
    public ConversationResponse reply(Authentication authentication,
                                      @PathVariable Long conversationId,
                                      @Valid @RequestBody ConversationMessageRequest request) {
        User user = securityUtils.getCurrentUser(authentication);
        return conversationService.reply(user, conversationId, request);
    }
}
