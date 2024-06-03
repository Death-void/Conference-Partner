package com.myhuiban.model;

import javax.persistence.*;

/**
 * 参与会议实体类
 */
@Entity
public class ParticipateConference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 参与会议ID

    @Column(nullable = false)
    private Long userId; // 用户ID

    @Column(nullable = false)
    private Long conferenceId; // 会议ID

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getConferenceId() {
        return conferenceId;
    }

    public void setConferenceId(Long conferenceId) {
        this.conferenceId = conferenceId;
    }
// Getters 和 Setters 方法
}
