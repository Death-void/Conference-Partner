package com.myhuiban.service.impl;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.model.Conference;
import com.myhuiban.service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConferenceServiceImpl implements ConferenceService {

    @Autowired
    private ConferenceMapper conferenceMapper;

    @Override
    public Conference createConference(Conference conference) {
        conferenceMapper.insert(conference);
        return conference;
    }

    @Override
    public List<Conference> searchByName(String name) {
        return conferenceMapper.searchByName(name);
    }

    @Override
    public int getConferenceVisitedNum() {
        return conferenceMapper.getConferenceVisitedNum();
    }

    @Override
    public Conference updateConference(Conference conference) {
        conferenceMapper.update(conference);
        return conference;
    }

    @Override
    public void deleteConference(Long id) {
        conferenceMapper.delete(id);
    }

    @Override
    public List<Conference> getAllConferences() {
        return conferenceMapper.findAll();
    }

    @Override
    public Conference getConferenceById(Long id) {
        return conferenceMapper.findById(id);
    }

    @Override
    public int getConferenceNum() {
        return conferenceMapper.getConferenceNum();
    }
}
