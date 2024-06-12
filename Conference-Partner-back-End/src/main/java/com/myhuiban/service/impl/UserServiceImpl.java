package com.myhuiban.service.impl;

import com.myhuiban.mapper.UserMapper;
import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void registerUser(User user) {
        user.setRegistrationTime(LocalDateTime.now());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userMapper.insert(user);
    }

    @Override
    public int getUserNum() {
        return userMapper.getUserNum();
    }

    @Override
    public User getUserInfo(Long id) {
        return userMapper.findById(id);
    }

    @Override
    public void updateUserInfo(User updatedUser) {
        updatedUser.setPassword(passwordEncoder.encode(updatedUser.getPassword()));
        userMapper.updateUserInfo(updatedUser);
    }

    @Override
    public User findByUsername(String userName) {
        return userMapper.findByUsername(userName);
    }

    @Override
    public boolean checkPassword(String rawPassword, String encodedPassword) {
        return passwordEncoder.matches(rawPassword, encodedPassword);
    }
}