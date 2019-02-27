package com.dev.filrouge.service;

import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.repo.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {
    @Autowired
    UtilisateurRepo utilisateurRepo;

    public void save(Utilisateur user){
        utilisateurRepo.save(user);
    }

    public Utilisateur findByName(String name){
        return utilisateurRepo.findByName(name);
    }
}