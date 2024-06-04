package com.myhuiban.service.impl;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.mapper.FollowConferenceMapper;
import com.myhuiban.model.Conference;
import com.myhuiban.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FollowServiceImpl implements FollowService {

    @Autowired
    private FollowConferenceMapper followConferenceMapper;

    @Autowired
    private ConferenceMapper conferenceMapper;

    @Override
    public List<Conference> getAllFollowConferenceByUserId(Long userId) {
        List<Long> conferenceIdList = followConferenceMapper.findAllByUserId(userId);
        List<Conference> conferenceList = new ArrayList<>();
        for (Long conferenceId : conferenceIdList)
            conferenceList.add(conferenceMapper.findById(conferenceId));
        return conferenceList;
    }

    @Override
    public int getConferenceFollowNumber(Long conferenceId) {
        return followConferenceMapper.countByConferenceId(conferenceId);
    }
}
