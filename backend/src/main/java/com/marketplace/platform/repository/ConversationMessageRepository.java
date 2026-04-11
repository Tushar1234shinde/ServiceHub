package com.marketplace.platform.repository;

import com.marketplace.platform.entity.ConversationMessage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversationMessageRepository extends JpaRepository<ConversationMessage, Long> {
}
