package com.controller;

import com.domain.LeaveApplication;
import com.exception.BadRequestAlertException;
import com.exception.NotFoundAlertException;
import com.service.LeaveApplicationImplService;
import com.service.LeaveApplicationService;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

/*@Controller*/
@RestController
@RequestMapping("/api")
public class LeaveApplicationController {

    private LeaveApplicationService leaveApplicationService;

    public LeaveApplicationController(LeaveApplicationService leaveApplicationService) {
        this.leaveApplicationService = leaveApplicationService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }

    @PostMapping("/leave-applications")
    public ResponseEntity<LeaveApplication> createLeaveApplication(@Valid @RequestBody LeaveApplication leaveApplication) throws Exception {
        if (leaveApplication.getId() != null) {
            throw new BadRequestAlertException("A new leave application cannot have an id value");
        }
        leaveApplicationService.insert(leaveApplication);
        return ResponseEntity.created(new URI("/leave-applications/"))
                .body(leaveApplication);
    }

    @PutMapping("/leave-applications")
    public ResponseEntity<LeaveApplication> updateLeaveApplication(@Valid @RequestBody LeaveApplication leaveApplication) throws Exception {
        if (leaveApplication.getId() == null) {
            throw new BadRequestAlertException("Invalid id");
        }
        leaveApplicationService.update(leaveApplication);
        return ResponseEntity.created(new URI("/leaveApplications/"))
                .body(leaveApplication);
    }

    @GetMapping("/leave-applications")
    public ResponseEntity<List<LeaveApplication>> getAllLeaveApplications() {
        List<LeaveApplication> leaveApplications = leaveApplicationService.getAll();
        return ResponseEntity.ok().body(leaveApplications);
    }

    @GetMapping("/leave-applications/{id}")
    public ResponseEntity<LeaveApplication> getLeaveApplication(@PathVariable Long id) {
        Optional<LeaveApplication> leaveApplication = Optional.ofNullable(leaveApplicationService.get(id));
        if (leaveApplication.isPresent()) {
            return ResponseEntity.ok().body(leaveApplication.get());
        }
        throw new NotFoundAlertException("Record not found [" + id + "]");
    }

    @DeleteMapping("/leave-applications/{id}")
    public ResponseEntity<LeaveApplication> deleteLeaveApplication(@PathVariable Long id) {
        leaveApplicationService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
