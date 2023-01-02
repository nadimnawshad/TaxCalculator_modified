package com.service;

import com.domain.Calculation;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface CalculationService {

    public Calculation insert(Calculation calculation);

    public Calculation get(Long id);

    public List<Calculation> getAll();

    public Calculation getByUserName(String category);

    public Calculation update(Calculation calculation);

    public void delete(Long id);
}
