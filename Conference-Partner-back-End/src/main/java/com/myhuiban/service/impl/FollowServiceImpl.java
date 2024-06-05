package com.myhuiban.service.impl;

import com.myhuiban.mapper.ConferenceMapper;
import com.myhuiban.mapper.FollowConferenceMapper;
import com.myhuiban.mapper.FollowJournalMapper;
import com.myhuiban.mapper.JournalMapper;
import com.myhuiban.model.Conference;
import com.myhuiban.model.FollowConference;
import com.myhuiban.model.FollowJournal;
import com.myhuiban.model.Journal;
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
    private FollowJournalMapper followJournalMapper;

    @Autowired
    private ConferenceMapper conferenceMapper;

    @Autowired
    private JournalMapper journalMapper;

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

    @Override
    public FollowConference createFollowConference(FollowConference followConference) {
        FollowConference find = followConferenceMapper.find(followConference);
        if (find != null)
            return find;

        followConferenceMapper.insert(followConference);
        return followConference;
    }

    @Override
    public FollowConference deleteFollowConference(FollowConference followConference) {
        FollowConference find = followConferenceMapper.find(followConference);
        if (find != null)
            followConferenceMapper.delete(find.getId());
        return followConference;
    }

    @Override
    public List<Journal> getAllFollowJournalByUserId(Long userId) {
        List<Long> journalIdList = followJournalMapper.findAllByUserId(userId);
        List<Journal> journalList = new ArrayList<>();
        for (Long journalId : journalIdList)
            journalList.add(journalMapper.findById(journalId));
        return journalList;
    }

    @Override
    public int getJournalFollowNumber(Long journalId) {
        return followJournalMapper.countByJournalId(journalId);
    }

    @Override
    public FollowJournal createFollowJournal(FollowJournal followJournal) {
        FollowJournal find = followJournalMapper.find(followJournal);
        if (find != null)
            return find;

        followJournalMapper.insert(followJournal);
        return followJournal;
    }

    @Override
    public FollowJournal deleteFollowJournal(FollowJournal followJournal) {
        FollowJournal find = followJournalMapper.find(followJournal);
        if (find != null)
            followJournalMapper.delete(find.getId());
        return followJournal;
    }
}
