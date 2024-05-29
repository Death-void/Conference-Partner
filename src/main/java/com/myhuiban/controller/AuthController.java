package com.myhuiban.controller;

import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUserName()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("用户名已存在");
        }
        userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("用户注册成功");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User foundUser = userService.findByUsername(user.getUserName());
        if (foundUser == null || !userService.checkPassword(user.getPassword(), foundUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("用户名或密码错误");
        }
        return ResponseEntity.ok("登录成功");
    }
}
