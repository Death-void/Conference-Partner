package com.myhuiban.controller;

import com.myhuiban.model.Journal;
import com.myhuiban.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journals")
public class JournalController {

    @Autowired
    private JournalService journalService;

    @PostMapping
    public Journal createJournal(@RequestBody Journal journal) {
        return journalService.createJournal(journal);
    }

    @PutMapping("/{id}")
    public Journal updateJournal(@PathVariable Long id, @RequestBody Journal journal) {
        journal.setId(id);
        return journalService.updateJournal(journal);
    }

    @DeleteMapping("/{id}")
    public void deleteJournal(@PathVariable Long id) {
        journalService.deleteJournal(id);
    }

    @GetMapping
    public List<Journal> getAllJournals() {
        return journalService.getAllJournals();
    }

    @GetMapping("/{id}")
    public Journal getJournalById(@PathVariable Long id) {
        return journalService.getJournalById(id);
    }
}
