package com.myhuiban.mapper;

import com.myhuiban.model.FollowJournal;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FollowJournalMapper {

    List<Long> findAllByUserId(Long id);

    int countByJournalId(Long id);

    void insert(FollowJournal followJournal);

    void delete(Long id);

    FollowJournal find(FollowJournal followJournal);
}
