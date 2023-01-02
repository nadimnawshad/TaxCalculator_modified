package com.service;

import com.domain.Calculation;
import com.repository.CalculationImplRepository;
import com.repository.CalculationRepository;
import com.repository.TaxUserRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CalculationImplService implements CalculationService {

    private CalculationRepository calculationRepository;

    public CalculationImplService(CalculationRepository calculationRepository) {
        this.calculationRepository = calculationRepository ;
    }


    @Transactional
    public Calculation insert(Calculation calculation) {
        return calculationRepository.create(calculation);
    }

    @Transactional(readOnly = true)
    public Calculation get(Long id) {
        return calculationRepository.get(id);
    }

    @Transactional(readOnly = true)
    public List<Calculation> getAll() {
        return calculationRepository.getAll();
    }

    @Transactional(readOnly = true)
    public Calculation getByUserName(String username) {
        return calculationRepository.getByUserName(username);
    }

    @Transactional
    public Calculation update(Calculation taxUser) {
        return calculationRepository.update(taxUser);
    }

    @Transactional
    public void delete(Long id) {
        calculationRepository.delete(id);
    }
}
