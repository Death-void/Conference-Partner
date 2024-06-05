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

    private String website; // 会议网站

    private String abbreviation; // 会议简称

    private String callForPapers; // 会议征稿

    private String CCF; // CCF级别
    private String CORE; // CORE级别
    private String QUALIS; // QUALIS级别

    private LocalDate submissionDeadline; // 提交截止日期
    private LocalDate notificationDate; // 通知日期
    private LocalDate conferenceDate; // 会议日期

    private String location; // 会议地点
    private int frequency; // 届数

    private Long viewCount; // 浏览数

    private Boolean isPostponed; // 是否延期

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

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getCallForPapers() {
        return callForPapers;
    }

    public void setCallForPapers(String callForPapers) {
        this.callForPapers = callForPapers;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    public Boolean getIsPostponed() {
        return isPostponed;
    }

    public void setIsPostponed(Boolean postponed) {
        isPostponed = postponed;
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

    public String getLocation() {
        return location;
    }

    public int getFrequency() {
        return frequency;
    }
}
