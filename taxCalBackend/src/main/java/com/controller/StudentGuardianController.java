package com.controller;

import com.domain.Student;
import com.domain.StudentGuardian;
import com.service.StudentGuardianService;
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
@RequestMapping("/student_guardians")
public class StudentGuardianController {

    private StudentGuardianService studentGuardianService;
    private StudentService studentService;

    public StudentGuardianController(StudentGuardianService studentGuardianService, StudentService studentService) {
        this.studentGuardianService = studentGuardianService;
        this.studentService = studentService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }

    @RequestMapping("/create")
    public void create() {
        Student student = studentService.get(4L);
        StudentGuardian studentGuardian = new StudentGuardian();
        studentGuardian.setFatherName("abc");
        studentGuardian.setMotherName("def");
        studentGuardian.setStudent(student);
        studentGuardianService.insert(studentGuardian);
    }

    @RequestMapping("/get")
    public void get() {
        StudentGuardian studentGuardian = studentGuardianService.get(2L);
        System.out.println(studentGuardian.getId() + " " + studentGuardian.getFatherName() + " " + studentGuardian.getMotherName());
        System.out.println(studentGuardian.getStudent().getFirstname() + " " + studentGuardian.getStudent().getLastname());
    }
}
