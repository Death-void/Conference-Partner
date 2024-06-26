package com.myhuiban.service.impl;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.mapper.UserMapper;
import com.myhuiban.model.Conference;
import com.myhuiban.model.User;
import com.myhuiban.service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class ConferenceServiceImpl implements ConferenceService {

    @Autowired
    private ConferenceMapper conferenceMapper;
    @Autowired
    private UserMapper userMapper;

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
    public List<Conference> getConfInCall(LocalDate currentDate) {
        return conferenceMapper.getConfInCall(currentDate);
    }

    @Override
    public List<Conference> getConfFinished(LocalDate currentDate) {
        return conferenceMapper.getConfFinished(currentDate);
    }

    @Override
    public List<User> getFollowersInConference(Long conferenceId) {
        List<Long> followersId = conferenceMapper.getFollowersInConference(conferenceId);
        List<User> users = new ArrayList<>();
        for (Long id : followersId) {
            users.add(userMapper.findById(id));
        }

        return users;
    }

    @Override
    public List<User> getJoinersInConference(Long conferenceId) {
        List<Long> joinersId = conferenceMapper.getJoinersInConference(conferenceId);
        List<User> users = new ArrayList<>();
        for (Long id : joinersId) {
            users.add(userMapper.findById(id));
        }
        return users;
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

    @Override
    public List<Conference> getTopTenVisitConferences() {
        return conferenceMapper.findTopTenVisit();
    }

    @Override
    public List<Conference> getAllVisitConferences() {
        return conferenceMapper.findAllVisit();
    }

    @Override
    public void incrementViewCount(Long id) {
        conferenceMapper.incrementViewCount(id);
    }
}
