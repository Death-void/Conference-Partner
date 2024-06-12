package com.myhuiban.controller;

import com.myhuiban.model.Journal;
import com.myhuiban.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
@Api(value = "用户管理系统", description = "用户管理系统中的操作")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/getUserNum")
    public ResponseEntity<Integer> getUserNum() {
        return ResponseEntity.ok(userService.getUserNum());
    }
}
