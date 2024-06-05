package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.service.ConferenceService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ConferenceServiceImplTest {

    @Autowired
    private ConferenceService conferenceService;

    private Conference conference;

    @Before
    public void setUp() {
        conference = new Conference();
        conference.setName("Test Conference");
        conference.setWebsite("http://testconference.com");
        conference.setAbbreviation("TC");
        conference.setCallForPapers("Call for papers details...");
        conference.setCCF("A");
        conference.setCORE("A*");
        conference.setQUALIS("A1");
        conference.setSubmissionDeadline(LocalDate.of(2024, 6, 1));
        conference.setNotificationDate(LocalDate.of(2024, 7, 1));
        conference.setConferenceDate(LocalDate.of(2024, 8, 1));
        conference.setLocation("San Francisco, USA");
        conference.setFrequency(1);
        conference.setViewCount(100L);
        conference.setIsPostponed(false);
    }

    @Test
    public void testCreateConference() {
        Conference createdConference = conferenceService.createConference(conference);
        assertNotNull(createdConference);
        assertNotNull(createdConference.getId());
        assertEquals("Test Conference", createdConference.getName());
    }

    @Test
    public void testUpdateConference() {
        Conference createdConference = conferenceService.createConference(conference);
        createdConference.setName("Updated Conference");
        Conference updatedConference = conferenceService.updateConference(createdConference);
        assertNotNull(updatedConference);
        assertEquals("Updated Conference", updatedConference.getName());
    }

    @Test
    public void testDeleteConference() {
        Conference createdConference = conferenceService.createConference(conference);
        assertNotNull(createdConference);
        conferenceService.deleteConference(createdConference.getId());
        Conference deletedConference = conferenceService.getConferenceById(createdConference.getId());
        assertNull(deletedConference);
    }

    @Test
    public void testGetAllConferences() {
        List<Conference> conferences = conferenceService.getAllConferences();
        assertNotNull(conferences);
        assertTrue(conferences.size() > 0);
    }

    @Test
    public void testGetConferenceById() {
        Conference createdConference = conferenceService.createConference(conference);
        Conference fetchedConference = conferenceService.getConferenceById(createdConference.getId());
        assertNotNull(fetchedConference);
        assertEquals("Test Conference", fetchedConference.getName());
    }
}
