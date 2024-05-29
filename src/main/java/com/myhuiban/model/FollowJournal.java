package com.myhuiban.model;

import javax.persistence.*;

/**
 * 关注期刊实体类
 */
@Entity
public class FollowJournal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 关注期刊ID

    @Column(nullable = false)
    private Long userId; // 用户ID

    @Column(nullable = false)
    private Long journalId; // 期刊ID

    // Getters 和 Setters 方法
}
