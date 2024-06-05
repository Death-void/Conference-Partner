package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.model.FollowConference;

import java.util.List;

public interface FollowService {

    List<Conference> getAllFollowConferenceByUserId(Long userId);

    int getConferenceFollowNumber(Long conferenceId);

    FollowConference createFollowConference(FollowConference followConference);
}
