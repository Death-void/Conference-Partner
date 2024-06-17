package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.service.ConferenceService;
import com.myhuiban.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.naming.directory.SearchResult;
import java.time.LocalDate;
import java.util.List;
import org.springframework.security.core.Authentication;

@RestController
@RequestMapping("/conferences")
@Api(value = "会议管理系统", description = "会议管理系统中的操作")
public class ConferenceController {

    @Autowired
    private ConferenceService conferenceService;
    @Autowired
    private UserService userService;

    @ApiOperation(value = "创建新会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功创建会议"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Conference createConference(@RequestBody Conference conference) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        conference.setLastModifiedDate(LocalDate.now());
        conference.setLastModifiedUser(currentUserName);
        return conferenceService.createConference(conference);
    }

    @ApiOperation(value = "更新现有会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功更新会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public Conference updateConference(@PathVariable Long id, @RequestBody Conference conference) {
        // 获取当前认证的用户
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();

        conference.setId(id);
        conference.setLastModifiedUser(currentUserName);
        conference.setLastModifiedDate(LocalDate.now());
        return conferenceService.updateConference(conference);
    }

    @ApiOperation(value = "删除会议")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功删除会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteConference(@PathVariable Long id) {
        conferenceService.deleteConference(id);
    }

    @ApiOperation(value = "获取所有会议", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议列表"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping
    public List<Conference> getAllConferences() {
        return conferenceService.getAllConferences();
    }

    @ApiOperation(value = "通过ID获取会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/{id}")
    public Conference getConferenceById(@PathVariable Long id) {
        return conferenceService.getConferenceById(id);
    }

    @GetMapping("/searchConfByName")
    public ResponseEntity<?> searchConfJourByName(@RequestParam String name) {
        List<Conference> conferences = conferenceService.searchByName(name);
        return ResponseEntity.ok(conferences);
    }

    @GetMapping("/getConferenceNum")
    public ResponseEntity<Integer> getConferenceNum() {
        return ResponseEntity.ok(conferenceService.getConferenceNum());
    }

    @GetMapping("/getConfInCall")
    public ResponseEntity<List<Conference>> getConfInCall() {
        LocalDate currentDate = LocalDate.now();
        List<Conference> conferencesInCall = conferenceService.getConfInCall(currentDate);
        return ResponseEntity.ok(conferencesInCall);
    }

    @GetMapping("/getConfFinished")
    public ResponseEntity<List<Conference>> getConfFinished() {
        LocalDate currentDate = LocalDate.now();
        List<Conference> conferencesFinished = conferenceService.getConfFinished(currentDate);
        return ResponseEntity.ok(conferencesFinished);
    }

    @GetMapping("/getFollowersInConference")
    public ResponseEntity<List<Long>> getFollowersInConference(@RequestParam Long conferenceId) {
        List<Long> followers = conferenceService.getFollowersInConference(conferenceId);
        return ResponseEntity.ok(followers);
    }

    @GetMapping("/getJoinersInConference")
    public ResponseEntity<List<Long>> getJoinersInConference(@RequestParam Long conferenceId) {
        List<Long> joiners = conferenceService.getJoinersInConference(conferenceId);
        return ResponseEntity.ok(joiners);
    }

    @GetMapping("/getFollowersCount")
    public ResponseEntity<Integer> getFollowersCount(@RequestParam Long conferenceId) {
        List<Long> followers = conferenceService.getFollowersInConference(conferenceId);
        return ResponseEntity.ok(followers.size());
    }

    @GetMapping("/getJoinersCount")
    public ResponseEntity<Integer> getJoinersCount(@RequestParam Long conferenceId) {
        List<Long> joiners = conferenceService.getJoinersInConference(conferenceId);
        return ResponseEntity.ok(joiners.size());
    }

    @ApiOperation(value = "获取浏览前十的会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/visit/topTen")
    public List<Conference> getTopTenVisitConferences() {
        return conferenceService.getTopTenVisitConferences();
    }

    @GetMapping("/visit/all")
    public List<Conference> getAllVisitConferences() {
        return conferenceService.getAllVisitConferences();
    }

    @PutMapping("/{id}/incrementViewCount")
    public ResponseEntity<Void> incrementConferenceViewCount(@PathVariable Long id) {
        conferenceService.incrementViewCount(id);
        return ResponseEntity.ok().build();
    }
}
