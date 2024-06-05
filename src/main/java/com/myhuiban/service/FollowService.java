package com.myhuiban.service;

import com.myhuiban.model.Conference;
import com.myhuiban.model.FollowConference;
import com.myhuiban.model.FollowJournal;
import com.myhuiban.model.Journal;

import java.util.List;

public interface FollowService {

    List<Conference> getAllFollowConferenceByUserId(Long userId);

    int getConferenceFollowNumber(Long conferenceId);

    FollowConference createFollowConference(FollowConference followConference);

    List<Journal> getAllFollowJournalByUserId(Long userId);

    int getJournalFollowNumber(Long journalId);

    FollowJournal createFollowJournal(FollowJournal followJournal);
}
