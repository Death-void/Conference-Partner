package com.myhuiban.service.impl;

import com.myhuiban.mapper.JournalMapper;
import com.myhuiban.mapper.UserMapper;
import com.myhuiban.model.Journal;
import com.myhuiban.model.User;
import com.myhuiban.service.JournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class JournalServiceImpl implements JournalService {

    @Autowired
    private JournalMapper journalMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public Journal createJournal(Journal journal) {
        journalMapper.insert(journal);
        return journal;
    }

    @Override
    public List<Journal> searchByName(String name) {
        return journalMapper.searchByName(name);
    }

    @Override
    public int getJournalVisitedNum() {
        return journalMapper.getJournalVisitedNum();
    }

    @Override
    public List<Journal> getJourInCall(LocalDate currentDate) {
        return journalMapper.getJourInCall(currentDate);
    }

    @Override
    public List<Journal> getJourFinished(LocalDate currentDate) {
        return journalMapper.getJourFinished(currentDate);
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

    @Override
    public int getJournalNum() {
        return journalMapper.getJournalNum();
    }

    @Override
    public List<User> getFollowersInJournal(Long journalId) {
        List<Long> followersId = journalMapper.getFollowersInJournal(journalId);
        List<User> users = new ArrayList<>();
        for (Long id : followersId) {
            System.out.println(id);
            users.add(userMapper.findById(id));
        }
        return users;
    }

    @Override
    public List<Journal> getTopTenVisitJournals() {
        return journalMapper.findTopTenVisit();
    }

    @Override
    public List<Journal> getAllVisitJournals() {
        return journalMapper.findAllVisit();
    }

    @Override
    public void incrementViewCount(Long id) {
        journalMapper.incrementViewCount(id);
    }
}
