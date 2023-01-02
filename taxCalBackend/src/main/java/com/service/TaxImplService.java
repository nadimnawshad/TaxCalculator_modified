package com.service;

import com.domain.Tax;
import com.repository.TaxImplRepository;
import com.repository.TaxRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaxImplService implements TaxService {

    private TaxRepository taxRepository;

    public TaxImplService(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    @Transactional
    public Tax insert(Tax tax) {
        return taxRepository.create(tax);
    }

    @Transactional(readOnly = true)
    public Tax get(Long id) {
        return taxRepository.get(id);
    }

    @Transactional(readOnly = true)
    public List<Tax> getAll() {
        return taxRepository.getAll();
    }

    @Transactional(readOnly = true)
    public List<Tax> getByUserName(String username) {
        return taxRepository.getByUserName(username);
    }

    @Transactional
    public Tax update(Tax tax) {
        return taxRepository.update(tax);
    }

    @Transactional
    public void delete(Long id) {
        taxRepository.delete(id);
    }
}
