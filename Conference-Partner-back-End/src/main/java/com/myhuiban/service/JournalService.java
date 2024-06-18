package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.model.Journal;
import com.myhuiban.model.User;

import java.time.LocalDate;
import java.util.List;

public interface JournalService {
    Journal createJournal(Journal journal);
    Journal updateJournal(Journal journal);
    void deleteJournal(Long id);
    List<Journal> getAllJournals();
    Journal getJournalById(Long id);
    int getJournalNum();
    List<Journal> searchByName(String name);
    int getJournalVisitedNum();
    List<Journal> getJourInCall(LocalDate currentDate);
    List<Journal> getJourFinished(LocalDate currentDate);
    List<User> getFollowersInJournal(Long journalId);
    List<Journal> getTopTenVisitJournals();
    List<Journal> getAllVisitJournals();
    void incrementViewCount(Long id);
}
