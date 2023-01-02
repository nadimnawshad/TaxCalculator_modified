package com.service;

import com.domain.Tax;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface TaxService {

    public Tax insert(Tax tax);

    public Tax get(Long id);

    public List<Tax> getAll();

    public List<Tax> getByUserName(String username);

    public Tax update(Tax tax);

    public void delete(Long id);
}
