package com.repository;

import com.domain.Tax;
import org.hibernate.Query;
import org.hibernate.Session;

import java.util.List;

public interface TaxRepository {

    public List<Tax> getAll();
    public List<Tax> getByUserName(String username);

    public Tax create(Tax tax);

    public Tax get(Long id);

    public Tax update(Tax tax);

    public void delete(Long id);
}
