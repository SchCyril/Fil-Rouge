package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.repo.UtilisateurRepo;

@Service
public class UtilisateurService {
    @Autowired
    UtilisateurRepo userRepo;

    public void save(Utilisateur user){
        userRepo.save(user);
    }

    public Utilisateur findByName(String name){
        return userRepo.findByName(name);
    }
}