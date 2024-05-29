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

    // Getters 和 Setters 方法
}
