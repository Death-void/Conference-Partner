package com.myhuiban.model;

import lombok.Data;

@Data
public class FollowJournalDetail {

    private Long journalId;

    private int followNum;

    private Journal journal;

}
