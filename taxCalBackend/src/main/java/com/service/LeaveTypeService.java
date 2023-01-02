package com.service;

import com.domain.LeaveType;
import com.domain.Student;
import com.repository.LeaveTypeRepository;
import com.repository.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLException;

@Service
@Transactional
public class LeaveTypeService {

    private LeaveTypeRepository leaveTypeRepository;

    public LeaveTypeService(LeaveTypeRepository leaveTypeRepository) {
        this.leaveTypeRepository = leaveTypeRepository;
    }

    @Transactional
    public boolean insert(LeaveType leaveType) {
        leaveType.setCategory(leaveType.getCategory());
        leaveType.setTotalDays(leaveType.getTotalDays());
        return leaveTypeRepository.create(leaveType);
    }

    @Transactional(readOnly = true)
    public LeaveType get(Long id) {
        return leaveTypeRepository.get(id);
    }
}
