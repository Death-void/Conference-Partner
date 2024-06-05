package com.myhuiban.service;

import com.myhuiban.model.User;

public interface UserService {
    void registerUser(User user);
    User findByUsername(String userName);
    boolean checkPassword(String rawPassword, String encodedPassword);
}
