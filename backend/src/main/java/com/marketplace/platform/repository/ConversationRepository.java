package com.marketplace.platform.repository;

import com.marketplace.platform.entity.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {

    @Query("select distinct c from Conversation c join fetch c.client join fetch c.vendor v join fetch v.user where c.client.id = :userId or v.user.id = :userId order by c.updatedAt desc")
    List<Conversation> findAllForUserWithParticipants(@Param("userId") Long userId);

    @Query("select distinct c from Conversation c join fetch c.client join fetch c.vendor v join fetch v.user left join fetch c.messages m left join fetch m.sender where c.id = :id")
    Optional<Conversation> findByIdWithMessages(@Param("id") Long id);

    Optional<Conversation> findByClientIdAndVendorIdAndServiceId(Long clientId, Long vendorId, Long serviceId);

    Optional<Conversation> findByClientIdAndVendorIdAndGalleryWorkId(Long clientId, Long vendorId, Long galleryWorkId);

    Optional<Conversation> findByClientIdAndVendorIdAndSubject(Long clientId, Long vendorId, String subject);
}
