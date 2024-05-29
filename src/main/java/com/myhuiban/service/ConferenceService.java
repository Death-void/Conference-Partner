package com.myhuiban.service;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.model.Conference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConferenceService {

    @Autowired
    private ConferenceMapper conferenceMapper;

    public Conference createConference(Conference conference) {
        conferenceMapper.insert(conference);
        return conference;
    }

    public Conference updateConference(Conference conference) {
        conferenceMapper.update(conference);
        return conference;
    }

    public void deleteConference(Long id) {
        conferenceMapper.delete(id);
    }

    public List<Conference> getAllConferences() {
        return conferenceMapper.findAll();
    }

    public Conference getConferenceById(Long id) {
        return conferenceMapper.findById(id);
    }
}
