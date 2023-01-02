package com.repository;

import com.domain.LeaveApplication;
import com.domain.TaxUser;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TaxUserImplRepository implements TaxUserRepository {

    private SessionFactory sessionFactory;

    public TaxUserImplRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<TaxUser> getAll() {
        Session session = sessionFactory.getCurrentSession();
        Query<TaxUser> taxQuery = session.createQuery("from TaxUser", TaxUser.class);
        return taxQuery.getResultList();
    }

    public TaxUser getByUserName(String user_name) {
        Session session = sessionFactory.getCurrentSession();

        Query<TaxUser> taxUserListQuery = session.createQuery("from TaxUser t where t.user_name='"+user_name+"'");
        return taxUserListQuery.getSingleResult();
    }

    public TaxUser create(TaxUser taxUser) {
        Session session = sessionFactory.getCurrentSession();
        session.save(taxUser);
        return taxUser;
    }

    public TaxUser get(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(TaxUser.class, id);
    }

    public TaxUser update(TaxUser taxUser) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(taxUser);
        return taxUser;
    }

    public void delete(Long id) {
        Session session = sessionFactory.getCurrentSession();
        TaxUser taxUser = get(id);
        if (taxUser != null) {
            session.delete(taxUser);
        }
    }
}
