package com.myhuiban.mapper;

import com.myhuiban.model.Conference;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;

@Mapper
public interface ConferenceMapper {

    List<Conference> findAll();

    Conference findById(Long id);

    void insert(Conference conference);

    void update(Conference conference);

    void delete(Long id);

    int getConferenceNum();

    List<Conference> searchByName(String name);

    int getConferenceVisitedNum();

    List<Conference> getConfInCall(LocalDate currentDate);

    List<Conference> getConfFinished(LocalDate currentDate);

    List<Long> getFollowersInConference(Long conferenceId);

    List<Long> getJoinersInConference(Long conferenceId);

    List<Conference> findTopTenVisit();

    List<Conference> findAllVisit();

    void incrementViewCount(Long id);
}
