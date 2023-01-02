package com.repository;

import com.domain.LeaveApplication;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public interface LeaveApplicationRepository {

    public List<LeaveApplication> getAll();

    public LeaveApplication create(LeaveApplication leaveApplication);

    public LeaveApplication get(Long id);

    public LeaveApplication update(LeaveApplication leaveApplication);

    public void delete(Long id);
}
