package com.myhuiban;

import com.myhuiban.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class Main {
    private static UserService userService;

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

}
