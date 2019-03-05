package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.repo.UtilisateurRepo;

@Service
public class UtilisateurService {

    @Autowired
    UtilisateurRepo utilisateurRepo;

    public void save(Utilisateur user) {
        utilisateurRepo.save(user);
    }

    public Utilisateur findByName(String name) {
        return utilisateurRepo.findByName(name);
    }

    public Utilisateur findByEmail(String email) {
        return utilisateurRepo.findByEmail(email);
    }
}