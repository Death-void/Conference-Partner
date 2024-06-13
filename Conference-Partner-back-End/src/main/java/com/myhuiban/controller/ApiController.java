package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.model.Journal;
import com.myhuiban.service.ConferenceService;
import com.myhuiban.service.JournalService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.directory.SearchResult;
import java.util.List;

@RestController
@RequestMapping("/api")

public class ApiController {

    @Autowired
    private ConferenceService conferenceService;

    @Autowired
    private JournalService  journalService;

    @GetMapping("/getPageVisitedNum")
    public ResponseEntity<Integer> getPageVisitedNum() {
        return ResponseEntity.ok(conferenceService.getConferenceVisitedNum()+journalService.getJournalVisitedNum());
    }

    @GetMapping("/searchJourConfByName")
    public ResponseEntity<SearchResult> searchConfJourByName(@RequestParam String name) {
        List<Conference> conferences = conferenceService.searchByName(name);
        List<Journal> journals = journalService.searchByName(name);
        return ResponseEntity.ok(new SearchResult(conferences,journals));
    }

    public class SearchResult {
        private List<Conference> conferences;
        private List<Journal> journals;

        // 构造器、getter和setter方法
        public SearchResult(List<Conference> conferences, List<Journal> journals) {
            this.conferences = conferences;
            this.journals = journals;
        }

        // Getter和Setter方法
        public List<Conference> getConferences() {
            return conferences;
        }

        public void setConferences(List<Conference> conferences) {
            this.conferences = conferences;
        }

        public List<Journal> getJournals() {
            return journals;
        }

        public void setJournals(List<Journal> journals) {
            this.journals = journals;
        }
    }
}
