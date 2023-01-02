package com.service;

import com.domain.Student;
import com.domain.StudentGuardian;
import com.repository.StudentGuardianRepository;
import com.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Service
@Transactional
public class StudentGuardianService {

    private StudentGuardianRepository studentGuardianRepository;

    public StudentGuardianService(StudentGuardianRepository studentGuardianRepository) {
        this.studentGuardianRepository = studentGuardianRepository;
    }

    @Transactional
    public boolean insert(StudentGuardian studentGuardian) {
        studentGuardian.setFatherName(studentGuardian.getFatherName());
        studentGuardian.setMotherName(studentGuardian.getMotherName());
        return studentGuardianRepository.create(studentGuardian);
    }

    @Transactional(readOnly = true)
    public StudentGuardian get(Long id) {
        return studentGuardianRepository.get(id);
    }
}
