package com.service;

import com.domain.TaxUser;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface TaxUserService {

    public TaxUser insert(TaxUser taxUser);

    public TaxUser get(Long id);

    public List<TaxUser> getAll();

    public TaxUser getByUserName(String username);

    public TaxUser update(TaxUser taxUser);

    public void delete(Long id);
}
