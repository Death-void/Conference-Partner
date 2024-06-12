package com.myhuiban.service;

import com.myhuiban.model.*;

import java.util.List;

public interface FollowService {

    List<Conference> getAllFollowConferenceByUserId(Long userId);

    int getConferenceFollowNumber(Long conferenceId);

    FollowConference createFollowConference(FollowConference followConference);

    FollowConference deleteFollowConference(FollowConference followConference);

    List<Journal> getAllFollowJournalByUserId(Long userId);

    int getJournalFollowNumber(Long journalId);

    FollowJournal createFollowJournal(FollowJournal followJournal);

    FollowJournal deleteFollowJournal(FollowJournal followJournal);

    List<FollowConferenceDetail> getTopTenFollowConference();

    List<FollowJournalDetail> getTopTenFollowJournal();
}
