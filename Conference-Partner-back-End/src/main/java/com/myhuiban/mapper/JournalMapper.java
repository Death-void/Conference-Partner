package com.myhuiban.mapper;

import com.myhuiban.model.Conference;
import com.myhuiban.model.Journal;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface JournalMapper {

    List<Journal> findAll();

    Journal findById(Long id);

    void insert(Journal journal);

    void update(Journal journal);

    void delete(Long id);

    List<Journal> searchByName(String name);

    int getJournalNum();

    int getJournalVisitedNum();

    List<Journal> getJourInCall(LocalDate currentDate);

    List<Journal> getJourFinished(LocalDate currentDate);

    List<Long> getFollowersInJournal(Long journalId);

    List<Journal> findTopTenVisit();
}
