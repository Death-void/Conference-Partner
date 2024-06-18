package com.myhuiban.model;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * 期刊实体类
 */
@Entity
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 期刊ID

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getISSN() {
        return ISSN;
    }

    public void setISSN(String ISSN) {
        this.ISSN = ISSN;
    }

    public Long getViewCount() {
        return viewCount;
    }

    public void setViewCount(Long viewCount) {
        this.viewCount = viewCount;
    }

    @Column(nullable = false)
    private String name; // 期刊名称

    private String website; // 网站
    private String specialIssue; // 特刊
    private String CCF; // CCF级别

    private LocalDate submissionDeadline; // 提交截止日期
    private String impactFactor; // 影响因子
    private String publisher; // 出版商
    private String ISSN; // 国际标准期刊号

    private Long viewCount; // 浏览次数
    private String callForPapers; // 期刊征稿信息

    public String getCallForPapers() {
        return callForPapers;
    }

    public void setCallForPapers(String callForPapers) {
        this.callForPapers = callForPapers;
    }

    public String getLastModifiedUser() {
        return lastModifiedUser;
    }

    public void setLastModifiedUser(String lastModifiedUser) {
        this.lastModifiedUser = lastModifiedUser;
    }

    public LocalDate getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(LocalDate lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    private LocalDate lastModifiedDate; // 最后修改日期
    private String lastModifiedUser; // 最后修改用户

    // Getters 和 Setters 方法

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialIssue() {
        return specialIssue;
    }

    public void setSpecialIssue(String specialIssue) {
        this.specialIssue = specialIssue;
    }

    public String getCCF() {
        return CCF;
    }

    public void setCCF(String CCF) {
        this.CCF = CCF;
    }

    public LocalDate getSubmissionDeadline() {
        return submissionDeadline;
    }

    public void setSubmissionDeadline(LocalDate submissionDeadline) {
        this.submissionDeadline = submissionDeadline;
    }

    public String getImpactFactor() {
        return impactFactor;
    }

    public void setImpactFactor(String impactFactor) {
        this.impactFactor = impactFactor;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }
}
