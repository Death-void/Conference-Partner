package com.myhuiban.model;

import lombok.Data;

@Data
public class FollowConferenceDetail {

    private Long conferenceId;

    private int followNum;

    private Conference conference;

}
