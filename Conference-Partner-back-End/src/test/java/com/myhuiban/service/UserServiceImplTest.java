package com.myhuiban.service;

import com.myhuiban.model.User;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import junit.framework.TestCase;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class UserServiceImplTest extends TestCase {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserService userService;

    @Before
    public void setUp() {
        // 初始化数据或配置
    }

    @Test
    public void testFindUser() {
        String username = "user1";
        User user = userService.findByUsername(username);
        System.out.println(user.getUserName());
        System.out.println(user.getEmail());
        System.out.println(user.getId());
    }

    @Test
    public void testRegisterUser() {
        User user = new User();
        user.setUserName("UserTest");
        user.setEmail("testUser@example.com");
        user.setPassword("123456");
        user.setInstitution("Test Institution");
        userService.registerUser(user);
    }

    @Test
    public void testCheckPassword() {
        User foundUser = userService.findByUsername("UserTest");
        System.out.println(userService.checkPassword("123456", foundUser.getPassword()));
    }
}