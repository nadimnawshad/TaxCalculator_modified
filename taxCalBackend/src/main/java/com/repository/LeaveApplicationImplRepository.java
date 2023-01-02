package com.repository;

import com.domain.LeaveApplication;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LeaveApplicationImplRepository implements LeaveApplicationRepository {

    private SessionFactory sessionFactory;

    public LeaveApplicationImplRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<LeaveApplication> getAll() {
        Session session = sessionFactory.getCurrentSession();
        Query<LeaveApplication> leaveApplicationQuery = session.createQuery("from LeaveApplication", LeaveApplication.class);
        return leaveApplicationQuery.getResultList();
    }

    public LeaveApplication create(LeaveApplication leaveApplication) {
        Session session = sessionFactory.getCurrentSession();
        session.save(leaveApplication);
        return leaveApplication;
    }

    public LeaveApplication get(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(LeaveApplication.class, id);
    }

    public LeaveApplication update(LeaveApplication leaveApplication) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(leaveApplication);
        return leaveApplication;
    }

    public void delete(Long id) {
        Session session = sessionFactory.getCurrentSession();
        LeaveApplication leaveApplication = get(id);
        if (leaveApplication != null) {
            session.delete(leaveApplication);
        }
    }
}
