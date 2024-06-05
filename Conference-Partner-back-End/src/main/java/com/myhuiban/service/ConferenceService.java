package com.myhuiban.service;

import com.myhuiban.model.Conference;

import java.util.List;

public interface ConferenceService {
    Conference createConference(Conference conference);
    Conference updateConference(Conference conference);
    void deleteConference(Long id);
    List<Conference> getAllConferences();
    Conference getConferenceById(Long id);
}
