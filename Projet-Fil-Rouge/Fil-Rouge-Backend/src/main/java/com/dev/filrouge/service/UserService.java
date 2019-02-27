package com.dev.filrouge.service;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public void save(Utilisateur user){
        userRepo.save(user);
    }

    public Utilisateur findByName(String name){
        return userRepo.findByName(name);
    }
}