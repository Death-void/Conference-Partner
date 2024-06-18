package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.model.User;

import java.time.LocalDate;
import java.util.List;

public interface ConferenceService {
    Conference createConference(Conference conference);
    Conference updateConference(Conference conference);
    void deleteConference(Long id);
    List<Conference> getAllConferences();
    Conference getConferenceById(Long id);
    int getConferenceNum();
    List<Conference> searchByName(String name);
    int getConferenceVisitedNum();
    List<Conference> getConfInCall(LocalDate currentDate);
    List<Conference> getConfFinished(LocalDate currentDate);
    List<User> getFollowersInConference(Long conferenceId);
    List<User> getJoinersInConference(Long conferenceId);
    List<Conference> getTopTenVisitConferences();
    List<Conference> getAllVisitConferences();
    void incrementViewCount(Long id);
}
