package com.myhuiban.controller;

import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import com.myhuiban.util.JwtUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@Api(value = "认证管理系统", description = "认证管理系统中的操作")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

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
        userService.registerUser(user); // 确保registerUser方法加密密码
        return ResponseEntity.status(HttpStatus.CREATED).body("用户注册成功");
    }

    @ApiOperation(value = "用户登录", response = String.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "登录成功"),
            @ApiResponse(code = 401, message = "用户名或密码错误")
    })
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword())
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("用户名或密码错误");
        }

        final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUserName());
        final String jwt = jwtUtil.generateToken(userDetails.getUsername());

        return ResponseEntity.ok().body(new AuthResponse(jwt));
    }

    static class AuthResponse {
        private final String token; //jwt token

        public AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
