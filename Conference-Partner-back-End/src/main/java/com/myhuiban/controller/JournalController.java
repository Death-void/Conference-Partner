package com.myhuiban.controller;

import com.myhuiban.model.Journal;
import com.myhuiban.service.JournalService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journals")
@CrossOrigin(origins = "http://localhost:3000") 
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
    @PostMapping
    public Journal createJournal(@RequestBody Journal journal) {
        return journalService.createJournal(journal);
    }

    @ApiOperation(value = "更新现有期刊", response = Journal.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功更新期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
    @PutMapping("/{id}")
    public Journal updateJournal(@PathVariable Long id, @RequestBody Journal journal) {
        journal.setId(id);
        return journalService.updateJournal(journal);
    }

    @ApiOperation(value = "删除期刊")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "成功删除期刊"),
            @ApiResponse(code = 404, message = "期刊未找到"),
            @ApiResponse(code = 400, message = "请求格式错误"),
            @ApiResponse(code = 500, message = "服务器内部错误")
    })
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
}
