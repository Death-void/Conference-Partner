package com.myhuiban.service.impl;

import com.myhuiban.mapper.JournalMapper;
import com.myhuiban.model.Journal;
import com.myhuiban.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JournalServiceImpl implements JournalService {

    @Autowired
    private JournalMapper journalMapper;

    @Override
    public Journal createJournal(Journal journal) {
        journalMapper.insert(journal);
        return journal;
    }

    @Override
    public Journal updateJournal(Journal journal) {
        journalMapper.update(journal);
        return journal;
    }

    @Override
    public void deleteJournal(Long id) {
        journalMapper.delete(id);
    }

    @Override
    public List<Journal> getAllJournals() {
        return journalMapper.findAll();
    }

    @Override
    public Journal getJournalById(Long id) {
        return journalMapper.findById(id);
    }
}
