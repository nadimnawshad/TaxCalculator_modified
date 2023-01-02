package com.repository;

import com.domain.Calculation;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public interface CalculationRepository {

    public List<Calculation> getAll();
    public Calculation getByUserName(String username);

    public Calculation create(Calculation calculation);

    public Calculation get(Long id);

    public Calculation update(Calculation calculation);

    public void delete(Long id);
}
