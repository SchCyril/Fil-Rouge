package com.dev.filrouge.repo;

import com.dev.filrouge.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepo extends JpaRepository<Produit, Long> {

    public Produit findByName(String name);
    public void create(Produit produit);
}