package com.myhuiban.model;

import javax.persistence.*;

/**
 * 用户角色实体类
 */
@Entity
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 用户角色ID

    @Column(nullable = false, unique = true)
    private String uniqueId; // 唯一标识

    @Column(nullable = false)
    private String name; // 角色名称

    // Getters 和 Setters 方法

}
