package com.myhuiban.model;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * 会议实体类
 */
@Entity
public class Conference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 会议ID

    @Column(nullable = false)
    private String name; // 会议名称

    private String abbreviation; // 会议简称

    private String CCF; // CCF级别
    private String CORE; // CORE级别
    private String QUALIS; // QUALIS级别

    private LocalDate submissionDeadline; // 提交截止日期
    private LocalDate notificationDate; // 通知日期
    private LocalDate conferenceDate; // 会议日期
    private LocalDate locationDate; // 会议地点日期

    private String location; // 会议地点
    private int frequency; // 届数


    // Getters 和 Setters 方法

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public void setName(String name) {
        this.name = name;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public void setCCF(String CCF) {
        this.CCF = CCF;
    }

    public void setCORE(String CORE) {
        this.CORE = CORE;
    }

    public void setQUALIS(String QUALIS) {
        this.QUALIS = QUALIS;
    }

    public void setSubmissionDeadline(LocalDate submissionDeadline) {
        this.submissionDeadline = submissionDeadline;
    }

    public void setNotificationDate(LocalDate notificationDate) {
        this.notificationDate = notificationDate;
    }

    public void setConferenceDate(LocalDate conferenceDate) {
        this.conferenceDate = conferenceDate;
    }

    public void setLocationDate(LocalDate locationDate) {
        this.locationDate = locationDate;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setFrequency(int frequency) {
        this.frequency = frequency;
    }

    public String getName() {
        return name;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public String getCCF() {
        return CCF;
    }

    public String getCORE() {
        return CORE;
    }

    public String getQUALIS() {
        return QUALIS;
    }

    public LocalDate getSubmissionDeadline() {
        return submissionDeadline;
    }

    public LocalDate getNotificationDate() {
        return notificationDate;
    }

    public LocalDate getConferenceDate() {
        return conferenceDate;
    }

    public LocalDate getLocationDate() {
        return locationDate;
    }

    public String getLocation() {
        return location;
    }

    public int getFrequency() {
        return frequency;
    }
}
