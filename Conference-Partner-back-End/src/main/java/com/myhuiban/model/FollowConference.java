package com.myhuiban.model;

import lombok.Data;

import javax.persistence.*;

/**
 * 关注会议实体类
 */
@Entity
@Data
public class FollowConference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 关注会议ID

    @Column(nullable = false)
    private Long userId; // 用户ID

    @Column(nullable = false)
    private Long conferenceId; // 会议ID
}
