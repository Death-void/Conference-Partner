package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.model.User;
import com.myhuiban.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ApiIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserService userService;

    @Before
    public void setUp() {
        // 初始化数据或配置
    }

    @Test
    public void testRegisterUser() {
        User user = new User();
        user.setUserName("UserTest");
        user.setEmail("testUser@example.com");
        user.setPassword("123456");
        user.setInstitution("Test Institution");
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        HttpEntity<User> request = new HttpEntity<>(user, headers);

        ResponseEntity<String> response = restTemplate.postForEntity("/auth/register", request, String.class);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
    }

    @Test
    public void testLoginUser() {
        User user = new User();
        user.setUserName("userTest");
//        user.setEmail("loginUser@example.com");
        user.setPassword("123456");
//        user.setInstitution("Test Institution");

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        String loginRequest = "{\"userName\": \"loginUser\", \"password\": \"testPassword\"}";
        HttpEntity<String> request = new HttpEntity<>(loginRequest, headers);

        ResponseEntity<String> response = restTemplate.postForEntity("/auth/login", request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testCreateConference() {
        Conference conference = new Conference();
        conference.setName("Test Conference");
        conference.setAbbreviation("TC");
        conference.setCCF("A");
        conference.setCORE("A");
        conference.setQUALIS("A");
        conference.setSubmissionDeadline(LocalDate.of(2024, 6, 1));
        conference.setNotificationDate(LocalDate.of(2024, 7, 1));
        conference.setConferenceDate(LocalDate.of(2024, 8, 1));
        conference.setLocation("Test Location");
        conference.setFrequency(1);

        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-Type", "application/json");

        HttpEntity<Conference> request = new HttpEntity<>(conference, headers);

        ResponseEntity<String> response = restTemplate.postForEntity("/conferences", request, String.class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    public void testGetAllConferences() {
        ResponseEntity<Conference[]> response = restTemplate.getForEntity("/conferences", Conference[].class);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertTrue(response.getBody().length > 0);
    }
}
