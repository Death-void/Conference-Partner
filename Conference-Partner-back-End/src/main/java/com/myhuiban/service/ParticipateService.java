package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.model.ParticipateConference;
import com.myhuiban.model.ParticipateConferenceDetail;

import java.util.List;

public interface ParticipateService {

    List<Conference> getAllParticipateConferenceByUserId(Long userId);

    int getConferenceParticipateNumber(Long conferenceId);

    ParticipateConference createParticipateConference(ParticipateConference participateConference);

    ParticipateConference deleteParticipateConference(ParticipateConference participateConference);

    List<ParticipateConferenceDetail> getAllParticipateConference();
}
