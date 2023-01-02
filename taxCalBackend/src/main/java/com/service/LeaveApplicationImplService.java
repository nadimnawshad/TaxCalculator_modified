package com.service;

import com.domain.LeaveApplication;
import com.repository.LeaveApplicationImplRepository;
import com.repository.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LeaveApplicationImplService implements LeaveApplicationService {

    private LeaveApplicationRepository leaveApplicationRepository;

    public LeaveApplicationImplService(LeaveApplicationRepository leaveApplicationRepository) {
        this.leaveApplicationRepository = leaveApplicationRepository;
    }

    @Transactional
    public LeaveApplication insert(LeaveApplication leaveApplication) {
        return leaveApplicationRepository.create(leaveApplication);
    }

    @Transactional(readOnly = true)
    public LeaveApplication get(Long id) {
        return leaveApplicationRepository.get(id);
    }

    @Transactional(readOnly = true)
    public List<LeaveApplication> getAll() {
        return leaveApplicationRepository.getAll();
    }

    @Transactional
    public LeaveApplication update(LeaveApplication leaveApplication) {
        return leaveApplicationRepository.update(leaveApplication);
    }

    @Transactional
    public void delete(Long id) {
        leaveApplicationRepository.delete(id);
    }
}
