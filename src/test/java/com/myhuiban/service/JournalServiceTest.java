package com.myhuiban.service;

import com.myhuiban.mapper.JournalMapper;
import com.myhuiban.model.Journal;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class JournalServiceTest {

    @Autowired
    private JournalService journalService;

    @Autowired
    private JournalMapper journalMapper;

    @Test
    public void testCreateJournal() {
        Journal journal = new Journal();
        journal.setUniqueId("journalIdTest1");
        journal.setName("Test Journal");
        journal.setSpecialIssue("Special Issue 1");
        journal.setCCF("A");
        journal.setSubmissionDeadline(LocalDate.of(2024, 6, 1));
        journal.setImpactFactor("5.0");
        journal.setPublisher("Test Publisher");

        Journal createdJournal = journalService.createJournal(journal);
        assertNotNull(createdJournal);
        assertNotNull(createdJournal.getId());
    }

    @Test
    public void testUpdateJournal() {
        Journal journal = new Journal();
        journal.setUniqueId("journalIdTest2");
        journal.setName("Update Journal");
        journal.setSpecialIssue("Special Issue 2");
        journal.setCCF("B");
        journal.setSubmissionDeadline(LocalDate.of(2024, 6, 2));
        journal.setImpactFactor("6.0");
        journal.setPublisher("Update Publisher");

        journalMapper.insert(journal);

        journal.setName("Updated Journal");
        Journal updatedJournal = journalService.updateJournal(journal);
        assertNotNull(updatedJournal);
        assertEquals("Updated Journal", updatedJournal.getName());
    }

    @Test
    public void testDeleteJournal() {
        Journal journal = new Journal();
        journal.setUniqueId("journalIdTest3");
        journal.setName("Delete Journal");
        journal.setSpecialIssue("Special Issue 3");
        journal.setCCF("C");
        journal.setSubmissionDeadline(LocalDate.of(2024, 6, 3));
        journal.setImpactFactor("7.0");
        journal.setPublisher("Delete Publisher");

        journalMapper.insert(journal);

        journalService.deleteJournal(journal.getId());

        Journal foundJournal = journalService.getJournalById(journal.getId());
        assertNull(foundJournal);
    }

    @Test
    public void testGetAllJournals() {
        List<Journal> journals = journalService.getAllJournals();
        assertNotNull(journals);
        assertFalse(journals.isEmpty());
    }
}
