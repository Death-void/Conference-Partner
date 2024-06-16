package com.myhuiban.controller;

import com.myhuiban.model.Journal;
import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@Api(value = "用户管理系统", description = "用户管理系统中的操作")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getUserNum")
    public ResponseEntity<Integer> getUserNum() {
        return ResponseEntity.ok(userService.getUserNum());
    }

    @GetMapping("/getUserInfo/{id}")
    public ResponseEntity<User> getUserInfo(@PathVariable Long id) {
        User user = userService.getUserInfo(id);
        return ResponseEntity.ok(user);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/updateUserInfo/{id}")
    public ResponseEntity<User> updateUserInfo(@PathVariable Long id, @RequestBody User updatedUser) {
        // 在这里可能需要验证传入的userId是否与updatedUser中的userId相匹配
        if (!id.equals(updatedUser.getId())) {
            // 如果不匹配，返回400 Bad Request错误
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        userService.updateUserInfo(updatedUser);
        return ResponseEntity.ok(updatedUser);
    }
}
