package com.controller;

import com.domain.LeaveType;
import com.domain.Student;
import com.domain.StudentGuardian;
import com.service.LeaveTypeService;
import com.service.StudentService;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.sql.SQLException;

@Controller
@RequestMapping("/leaveTypes")
public class LeaveTypeController {

    private LeaveTypeService leaveTypeService;

    public LeaveTypeController(LeaveTypeService leaveTypeService) {
        this.leaveTypeService = leaveTypeService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }

    @RequestMapping("/create")
    public void create() {
        LeaveType leaveType = new LeaveType();
        leaveType.setCategory("Sick Leave");
        leaveType.setTotalDays(10);
        leaveTypeService.insert(leaveType);
    }

    @RequestMapping("/get")
    public void get() {
        LeaveType leaveType = leaveTypeService.get(1L);
        System.out.println(leaveType.getId() + " " + leaveType.getCategory() + " " + leaveType.getTotalDays());
    }
}
