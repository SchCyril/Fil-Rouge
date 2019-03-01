package com.dev.filrouge.repo;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.filrouge.model.Produit;

@Repository
public interface ProduitRepo extends JpaRepository<Produit, Long> {

    public Produit findByNom(String name);

    public Page<Produit> findAll(Pageable pageable);
    
    public List<Produit> findByCategorie(String categorie);
}