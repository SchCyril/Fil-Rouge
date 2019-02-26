package com.dev.filrouge.repo;
import com.dev.filrouge.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

    public User findByName(String name);
}