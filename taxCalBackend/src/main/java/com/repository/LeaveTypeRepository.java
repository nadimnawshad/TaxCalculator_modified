package com.repository;

import com.domain.LeaveType;
import com.domain.StudentGuardian;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LeaveTypeRepository {

    private SessionFactory sessionFactory;

    public LeaveTypeRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<LeaveType> list() {
        Session session = sessionFactory.getCurrentSession();
        Query<LeaveType> leaveTypeQuery = session.createQuery("from LeaveType", LeaveType.class);
        return leaveTypeQuery.getResultList();
    }

    public boolean create(LeaveType leaveType) {
        Session session = sessionFactory.getCurrentSession();
        session.save(leaveType);
        return true;
    }

    public LeaveType get(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(LeaveType.class, id);
    }
}
