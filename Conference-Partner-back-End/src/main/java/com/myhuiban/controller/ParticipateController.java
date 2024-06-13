package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.model.ParticipateConference;
import com.myhuiban.service.ParticipateService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/participate")
@CrossOrigin(origins = "http://localhost:3000")
@Api(value = "参与管理系统", description = "参与管理系统中的操作")
public class ParticipateController {

    @Autowired
    private ParticipateService participateService;

    @ApiOperation(value = "获取用户参加的所有会议", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议列表"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/conference/user/{id}")
    public List<Conference> getAllParticipateConference(@PathVariable Long id) {
        return participateService.getAllParticipateConferenceByUserId(id);
    }

    @ApiOperation(value = "用户参加会议", response = ParticipateConference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功参加会议"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping("/conference/participate")
    public ParticipateConference createParticipateConference(@RequestBody ParticipateConference participateConference) {
        return participateService.createParticipateConference(participateConference);
    }

    @ApiOperation(value = "用户取消参加会议", response = ParticipateConference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功取消参加会议"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping("/conference/participateDelete")
    public ParticipateConference deleteParticipateConference(@RequestBody ParticipateConference participateConference) {
        return participateService.deleteParticipateConference(participateConference);
    }

    @ApiOperation(value = "获取会议总参加数量", response = Integer.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取会议参加数量"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/conference/{id}")
    public int getConferenceParticipateNumber(@PathVariable Long id) {
        return participateService.getConferenceParticipateNumber(id);
    }

}
