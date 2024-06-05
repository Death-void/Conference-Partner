package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.model.FollowConference;
import com.myhuiban.model.FollowJournal;
import com.myhuiban.model.Journal;
import com.myhuiban.service.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/follow")
@Api(value = "关注管理系统", description = "关注管理系统中的操作")
public class FollowController {

    @Autowired
    private FollowService followService;

    @ApiOperation(value = "获取用户关注的所有会议", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议列表"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/conference/user/{id}")
    public List<Conference> getAllFollowConference(@PathVariable Long id) {
        return followService.getAllFollowConferenceByUserId(id);
    }

    @ApiOperation(value = "用户关注会议", response = FollowConference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功关注会议"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping("/conference/follow")
    public FollowConference createFollowConference(@RequestBody FollowConference followConference) {
        return followService.createFollowConference(followConference);
    }

    @ApiOperation(value = "获取会议总关注数量", response = Integer.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议关注数量"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/conference/{id}")
    public int getConferenceFollowNumber(@PathVariable Long id) {
        return followService.getConferenceFollowNumber(id);
    }

    @ApiOperation(value = "获取用户关注的所有期刊", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取期刊列表"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/journal/user/{id}")
    public List<Journal> getAllFollowJournal(@PathVariable Long id) {
        return followService.getAllFollowJournalByUserId(id);
    }

    @ApiOperation(value = "用户关注期刊", response = FollowJournal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功关注期刊"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping("/journal/follow")
    public FollowJournal createFollowJournal(@RequestBody FollowJournal followJournal) {
        return followService.createFollowJournal(followJournal);
    }

    @ApiOperation(value = "获取期刊总关注数量", response = Integer.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取期刊关注数量"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/journal/{id}")
    public int getJournalFollowNumber(@PathVariable Long id) {
        return followService.getJournalFollowNumber(id);
    }
}
