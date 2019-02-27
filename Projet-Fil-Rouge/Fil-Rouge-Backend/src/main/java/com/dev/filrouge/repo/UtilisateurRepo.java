package com.dev.filrouge.repo;

import com.dev.filrouge.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilisateurRepo extends JpaRepository<Utilisateur, Long> {

    public Utilisateur findByName(String name);
}