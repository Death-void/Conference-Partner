package com.myhuiban.controller;

import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000") 
@Api(value = "认证管理系统", description = "认证管理系统中的操作")
public class AuthController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "注册新用户", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 201, message = "用户注册成功"),
            @ApiResponse(code = 409, message = "用户名已存在")
    })
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userService.findByUsername(user.getUserName()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("用户名已存在");
        }
        userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("用户注册成功");
    }

    @ApiOperation(value = "用户登录", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "登录成功"),
            @ApiResponse(code = 401, message = "用户名或密码错误")
    })
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User foundUser = userService.findByUsername(user.getUserName());
        if (foundUser == null || !userService.checkPassword(user.getPassword(), foundUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("用户名或密码错误");
        }
        return ResponseEntity.ok("登录成功");
    }
}
