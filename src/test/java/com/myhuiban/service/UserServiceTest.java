package com.myhuiban.service;

import com.myhuiban.mapper.UserMapper;
import com.myhuiban.model.User;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void testRegisterUser() {
        User user = new User();
        user.setUniqueId("uniqueIdTest1");
        user.setUserName("testUser");
        user.setEmail("testUser@example.com");
        user.setPassword("testPassword");
        user.setInstitution("Test Institution");

        User registeredUser = userService.registerUser(user);
        assertNotNull(registeredUser);
        assertNotNull(registeredUser.getId());
        assertTrue(passwordEncoder.matches("testPassword", registeredUser.getPassword()));
    }

    @Test
    public void testFindByUsername() {
        User user = new User();
        user.setUniqueId("uniqueIdTest2");
        user.setUserName("findUser");
        user.setEmail("findUser@example.com");
        user.setPassword(passwordEncoder.encode("findPassword"));
        user.setInstitution("Test Institution");

        userMapper.insert(user);

        User foundUser = userService.findByUsername("findUser");
        assertNotNull(foundUser);
        assertEquals("findUser", foundUser.getUserName());
    }

    @Test
    public void testCheckPassword() {
        String rawPassword = "rawPassword";
        String encodedPassword = passwordEncoder.encode(rawPassword);

        assertTrue(userService.checkPassword(rawPassword, encodedPassword));
        assertFalse(userService.checkPassword("wrongPassword", encodedPassword));
    }
}
