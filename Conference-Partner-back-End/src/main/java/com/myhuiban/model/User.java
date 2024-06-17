package com.myhuiban.model;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * 用户实体类
 */

public class User {
    private Long id; // 用户ID
    private String userName; // 用户名

    private String email; // 电子邮件

    private String password;// 密码

    private String institution; // 科研机构

    private LocalDateTime registrationTime; // 注册时间

    private String role = "ROLE_USER";

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
// Getters 和 Setters 方法

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInstitution() {
        return institution;
    }

    public void setInstitution(String institution) {
        this.institution = institution;
    }

    public LocalDateTime getRegistrationTime() {
        return registrationTime;
    }

    public void setRegistrationTime(LocalDateTime registrationTime) {
        this.registrationTime = registrationTime;
    }
}
