package com.myhuiban.service;

import com.myhuiban.mapper.JournalMapper;
import com.myhuiban.model.Journal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JournalService {

    @Autowired
    private JournalMapper journalMapper;

    public Journal createJournal(Journal journal) {
        journalMapper.insert(journal);
        return journal;
    }

    public Journal updateJournal(Journal journal) {
        journalMapper.update(journal);
        return journal;
    }

    public void deleteJournal(Long id) {
        journalMapper.delete(id);
    }

    public List<Journal> getAllJournals() {
        return journalMapper.findAll();
    }

    public Journal getJournalById(Long id) {
        return journalMapper.findById(id);
    }
}
