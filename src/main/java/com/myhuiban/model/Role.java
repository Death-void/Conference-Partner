package com.myhuiban.model;

import javax.persistence.*;

/**
 * 角色实体类
 */
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 角色ID

    @Column(nullable = false)
    private String role; // 角色

    // Getters 和 Setters 方法
}
