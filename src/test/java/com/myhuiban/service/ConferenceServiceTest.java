package com.myhuiban.service;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.model.Conference;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ConferenceServiceTest {

    @Autowired
    private ConferenceService conferenceService;

    @Autowired
    private ConferenceMapper conferenceMapper;

    @Test
    public void testCreateConference() {
        Conference conference = new Conference();
        conference.setUniqueId("confIdTest1");
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

        Conference createdConference = conferenceService.createConference(conference);
        assertNotNull(createdConference);
        assertNotNull(createdConference.getId());
    }

    @Test
    public void testUpdateConference() {
        Conference conference = new Conference();
        conference.setUniqueId("confIdTest2");
        conference.setName("Update Conference");
        conference.setAbbreviation("UC");
        conference.setCCF("B");
        conference.setCORE("B");
        conference.setQUALIS("B");
        conference.setSubmissionDeadline(LocalDate.of(2024, 6, 2));
        conference.setNotificationDate(LocalDate.of(2024, 7, 2));
        conference.setConferenceDate(LocalDate.of(2024, 8, 2));
        conference.setLocation("Update Location");
        conference.setFrequency(2);

        conferenceMapper.insert(conference);

        conference.setName("Updated Conference");
        Conference updatedConference = conferenceService.updateConference(conference);
        assertNotNull(updatedConference);
        assertEquals("Updated Conference", updatedConference.getName());
    }

    @Test
    public void testDeleteConference() {
        Conference conference = new Conference();
        conference.setUniqueId("confIdTest3");
        conference.setName("Delete Conference");
        conference.setAbbreviation("DC");
        conference.setCCF("C");
        conference.setCORE("C");
        conference.setQUALIS("C");
        conference.setSubmissionDeadline(LocalDate.of(2024, 6, 3));
        conference.setNotificationDate(LocalDate.of(2024, 7, 3));
        conference.setConferenceDate(LocalDate.of(2024, 8, 3));
        conference.setLocation("Delete Location");
        conference.setFrequency(3);

        conferenceMapper.insert(conference);

        conferenceService.deleteConference(conference.getId());

        Conference foundConference = conferenceService.getConferenceById(conference.getId());
        assertNull(foundConference);
    }

    @Test
    public void testGetAllConferences() {
        List<Conference> conferences = conferenceService.getAllConferences();
        assertNotNull(conferences);
        assertFalse(conferences.isEmpty());
    }
}
