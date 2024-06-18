package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.model.Journal;
import com.myhuiban.model.User;
import com.myhuiban.service.JournalService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/journals")
@Api(value = "期刊管理系统", description = "期刊管理系统中的操作")
public class JournalController {

    @Autowired
    private JournalService journalService;

    @ApiOperation(value = "创建新期刊", response = Journal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功创建期刊"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping
    public Journal createJournal(@RequestBody Journal journal) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        journal.setLastModifiedUser(currentUserName);
        journal.setLastModifiedDate(LocalDate.now());
        return journalService.createJournal(journal);
    }

    @ApiOperation(value = "更新现有期刊", response = Journal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功更新期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/{id}")
    public Journal updateJournal(@PathVariable Long id, @RequestBody Journal journal) {

        // 获取当前认证的用户
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserName = authentication.getName();
        journal.setId(id);
        journal.setLastModifiedUser(currentUserName);
        journal.setLastModifiedDate(LocalDate.now());

        return journalService.updateJournal(journal);
    }

    @ApiOperation(value = "删除期刊")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功删除期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/{id}")
    public void deleteJournal(@PathVariable Long id) {
        journalService.deleteJournal(id);
    }

    @ApiOperation(value = "获取所有期刊", response = List.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取期刊列表"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping
    public List<Journal> getAllJournals() {
        return journalService.getAllJournals();
    }

    @ApiOperation(value = "通过ID获取期刊", response = Journal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/{id}")
    public Journal getJournalById(@PathVariable Long id) {
        return journalService.getJournalById(id);
    }

    @GetMapping("/searchJourByName")
    public ResponseEntity<?> searchConfJourByName(@RequestParam String name) {
        List<Journal> journals = journalService.searchByName(name);
        return ResponseEntity.ok(journals);
    }

    @GetMapping("/getJournalNum")
    public ResponseEntity<Integer> getJournalNum() {
        return ResponseEntity.ok(journalService.getJournalNum());
    }

    @GetMapping("/getJourInCall")
    public ResponseEntity<List<Journal>> getJourInCall() {
        LocalDate currentDate = LocalDate.now();
        List<Journal> journalsInCall = journalService.getJourInCall(currentDate);
        return ResponseEntity.ok(journalsInCall);
    }

    @GetMapping("/getJourFinished")
    public ResponseEntity<List<Journal>> getJourFinished() {
        LocalDate currentDate = LocalDate.now();
        List<Journal> journalsFinished = journalService.getJourFinished(currentDate);
        return ResponseEntity.ok(journalsFinished);
    }

    @GetMapping("/getFollowersInJournal")
    public ResponseEntity<List<User>> getFollowersInJournal(@RequestParam Long journalId) {
        List<User> followers = journalService.getFollowersInJournal(journalId);
        return ResponseEntity.ok(followers);
    }

    @ApiOperation(value = "获取浏览前十的期刊", response = Journal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功获取期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @GetMapping("/visit/topTen")
    public List<Journal> getTopTenVisitConferences() {
        return journalService.getTopTenVisitJournals();
    }

    @GetMapping("/visit/all")
    public List<Journal> getAllVisitConferences() {
        return journalService.getAllVisitJournals();
    }

    @PutMapping("/{id}/incrementViewCount")
    public ResponseEntity<Void> incrementJournalViewCount(@PathVariable Long id) {
        journalService.incrementViewCount(id);
        return ResponseEntity.ok().build();
    }
}
