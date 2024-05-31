package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.service.ConferenceService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conferences")
@Api(value = "会议管理系统", description = "会议管理系统中的操作")
public class ConferenceController {

    @Autowired
    private ConferenceService conferenceService;

    @ApiOperation(value = "创建新会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功创建会议"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PostMapping
    public Conference createConference(@RequestBody Conference conference) {
        return conferenceService.createConference(conference);
    }

    @ApiOperation(value = "更新现有会议", response = Conference.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功更新会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PutMapping("/{id}")
    public Conference updateConference(@PathVariable Long id, @RequestBody Conference conference) {
        conference.setId(id);
        return conferenceService.updateConference(conference);
    }

    @ApiOperation(value = "删除会议")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功删除会议"),
            @ApiResponse(code = 404, message = "会议未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
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
}
