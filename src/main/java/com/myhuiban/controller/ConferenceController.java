package com.myhuiban.controller;

import com.myhuiban.model.Conference;
import com.myhuiban.service.ConferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conferences")
public class ConferenceController {

    @Autowired
    private ConferenceService conferenceService;

    @PostMapping
    public Conference createConference(@RequestBody Conference conference) {
        return conferenceService.createConference(conference);
    }

    @PutMapping("/{id}")
    public Conference updateConference(@PathVariable Long id, @RequestBody Conference conference) {
        conference.setId(id);
        return conferenceService.updateConference(conference);
    }

    @DeleteMapping("/{id}")
    public void deleteConference(@PathVariable Long id) {
        conferenceService.deleteConference(id);
    }

    @GetMapping
    public List<Conference> getAllConferences() {
        return conferenceService.getAllConferences();
    }

    @GetMapping("/{id}")
    public Conference getConferenceById(@PathVariable Long id) {
        return conferenceService.getConferenceById(id);
    }
}
