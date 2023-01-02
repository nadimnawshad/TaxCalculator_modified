package com.service;

import com.domain.TaxUser;
import com.repository.TaxUserImplRepository;
import com.repository.TaxUserRepository;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaxUserImplService implements TaxUserService {

    private TaxUserRepository taxUserRepository;

    public TaxUserImplService(TaxUserRepository taxUserRepository) {
        this.taxUserRepository = taxUserRepository;
    }

    @Transactional
    public TaxUser insert(TaxUser taxUser) {
        return taxUserRepository.create(taxUser);
    }

    @Transactional(readOnly = true)
    public TaxUser get(Long id) {
        return taxUserRepository.get(id);
    }

    @Transactional(readOnly = true)
    public List<TaxUser> getAll() {
        return taxUserRepository.getAll();
    }

    @Transactional(readOnly = true)
    public TaxUser getByUserName(String username) {
        return taxUserRepository.getByUserName(username);
    }

    @Transactional
    public TaxUser update(TaxUser taxUser) {
        return taxUserRepository.update(taxUser);
    }

    @Transactional
    public void delete(Long id) {
        taxUserRepository.delete(id);
    }
}
