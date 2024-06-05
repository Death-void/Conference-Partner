package com.myhuiban.service.impl;

import com.myhuiban.model.Journal;
import com.myhuiban.service.JournalService;
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
public class JournalServiceImplTest {

    @Autowired
    private JournalService journalService;

    private Journal journal;

    @Before
    public void setUp() {
        journal = new Journal();
        journal.setName("Test Journal");
        journal.setWebsite("http://testjournal.com");
        journal.setSpecialIssue("Special Issue on AI");
        journal.setCCF("A");
        journal.setSubmissionDeadline(LocalDate.of(2024, 6, 1));
        journal.setImpactFactor("5.123");
        journal.setPublisher("Test Publisher");
        journal.setISSN("1234-5678");
        journal.setViewCount(100L);
    }

    @Test
    public void testCreateJournal() {
        Journal createdJournal = journalService.createJournal(journal);
        assertNotNull(createdJournal);
        assertNotNull(createdJournal.getId());
        assertEquals("Test Journal", createdJournal.getName());
    }

    @Test
    public void testUpdateJournal() {
        Journal createdJournal = journalService.createJournal(journal);
        createdJournal.setName("Updated Journal");
        Journal updatedJournal = journalService.updateJournal(createdJournal);
        assertNotNull(updatedJournal);
        assertEquals("Updated Journal", updatedJournal.getName());
    }

    @Test
    public void testDeleteJournal() {
        Journal createdJournal = journalService.createJournal(journal);
        assertNotNull(createdJournal);
        journalService.deleteJournal(createdJournal.getId());
        Journal deletedJournal = journalService.getJournalById(createdJournal.getId());
        assertNull(deletedJournal);
    }

    @Test
    public void testGetAllJournals() {
        List<Journal> journals = journalService.getAllJournals();
        assertNotNull(journals);
        assertTrue(journals.size() > 0);
    }

    @Test
    public void testGetJournalById() {
        Journal createdJournal = journalService.createJournal(journal);
        Journal fetchedJournal = journalService.getJournalById(createdJournal.getId());
        assertNotNull(fetchedJournal);
        assertEquals("Test Journal", fetchedJournal.getName());
    }
}
