package com.myhuiban.mapper;

import com.myhuiban.model.Conference;
import com.myhuiban.model.ParticipateConference;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ParticipateConferenceMapper {

    void insert(ParticipateConference participateConference);

    void delete(Long id);

    List<Long> findAllByUserId(Long id);

    int countByConferenceId(Long id);

    ParticipateConference find(ParticipateConference participateConference);

    List<Long> getJoinersInConference(Long conferenceId);

    List<Conference> getAllParticipateConference();
}
