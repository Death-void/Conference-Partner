package com.myhuiban.model;

import javax.persistence.*;
import java.time.LocalDate;
import lombok.Data;
/**
 * 会议实体类
 */
@Entity
@Data
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
}
