package com.myhuiban.model;

import lombok.Data;

@Data
public class ParticipateConferenceDetail {

    private Long conferenceId;

    private int participateNum;

    private Conference conference;
}