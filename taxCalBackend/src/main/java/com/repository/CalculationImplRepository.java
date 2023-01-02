package com.repository;

import com.domain.LeaveApplication;
import com.domain.Calculation;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CalculationImplRepository implements CalculationRepository {

    private SessionFactory sessionFactory;

    public CalculationImplRepository(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public List<Calculation> getAll() {
        Session session = sessionFactory.getCurrentSession();
        Query<Calculation> taxQuery = session.createQuery("from Calculation", Calculation.class);
        return taxQuery.getResultList();
    }

    public Calculation getByUserName(String category) {
        Session session = sessionFactory.getCurrentSession();

        Query<Calculation> categoryListQuery = session.createQuery("from Calculation t where t.category='"+category+"'");
        return categoryListQuery.getSingleResult();
    }

    public Calculation create(Calculation calculation) {
        Session session = sessionFactory.getCurrentSession();
        session.save(calculation);
        return calculation;
    }

    public Calculation get(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Calculation.class, id);
    }

    public Calculation update(Calculation calculation) {
        Session session = sessionFactory.getCurrentSession();
        session.saveOrUpdate(calculation);
        return calculation;
    }

    public void delete(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Calculation calculation = get(id);
        if (calculation != null) {
            session.delete(calculation);
        }
    }
}
