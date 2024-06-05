package com.myhuiban.mapper;

import com.myhuiban.model.FollowConference;
import com.myhuiban.model.FollowJournal;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FollowConferenceMapper {

    List<Long> findAllByUserId(Long id);

    int countByConferenceId(Long id);

    void insert(FollowConference followConference);

    FollowConference find(FollowConference followConference);
}
