package com.myhuiban.model;

import javax.persistence.*;

/**
 * 浏览实体类
 */
@Entity
public class Browse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 浏览ID

    @Column(nullable = false)
    private Long userId; // 用户ID

    @Column(nullable = false)
    private int browseCount; // 浏览次数

    // Getters 和 Setters 方法
}
