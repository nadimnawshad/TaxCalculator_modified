package com.repository;

import com.domain.LeaveApplication;
import com.domain.User;

import java.util.List;

public interface UserRepository {

    public List<User> getAll();

    public User create(User user);

    public User get(Long id);

    public User update(User user);

    public void delete(Long id);

    public User getByUsername(String username);
}
