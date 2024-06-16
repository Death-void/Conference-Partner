package com.myhuiban.service.impl;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.mapper.ParticipateConferenceMapper;
import com.myhuiban.model.Conference;
import com.myhuiban.model.ParticipateConference;
import com.myhuiban.service.ParticipateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ParticipateServiceImpl implements ParticipateService {

    @Autowired
    private ParticipateConferenceMapper participateConferenceMapper;

    @Autowired
    private ConferenceMapper conferenceMapper;

    @Override
    public List<Conference> getAllParticipateConferenceByUserId(Long userId) {
        List<Long> conferenceIdList = participateConferenceMapper.findAllByUserId(userId);
        List<Conference> conferenceList = new ArrayList<>();
        for (Long conferenceId : conferenceIdList)
            conferenceList.add(conferenceMapper.findById(conferenceId));
        return conferenceList;
    }

    @Override
    public int getConferenceParticipateNumber(Long conferenceId) {
        return participateConferenceMapper.countByConferenceId(conferenceId);
    }

    @Override
    public ParticipateConference createParticipateConference(ParticipateConference participateConference) {
        ParticipateConference find = participateConferenceMapper.find(participateConference);
        if (find != null)
            return find;
        participateConferenceMapper.insert(participateConference);
        return participateConference;
    }

    @Override
    public ParticipateConference deleteParticipateConference(ParticipateConference participateConference) {
        ParticipateConference find = participateConferenceMapper.find(participateConference);
        if (find != null)
            participateConferenceMapper.delete(find.getId());
        return participateConference;
    }

    @Override
    public List<Conference> getAllParticipateConference() {
        return participateConferenceMapper.getAllParticipateConference();
    }
}
