package com.repository;

import com.domain.TaxUser;

import java.util.List;

public interface TaxUserRepository {

    public List<TaxUser> getAll();
    public TaxUser getByUserName(String username);

    public TaxUser create(TaxUser taxUser);

    public TaxUser get(Long id);

    public TaxUser update(TaxUser taxUser);

    public void delete(Long id);
}
