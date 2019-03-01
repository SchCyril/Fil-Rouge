package com.dev.filrouge.service;


import com.dev.filrouge.model.Produit;
import com.dev.filrouge.repo.ProduitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProduitService {
    @Autowired
    public ProduitRepo produitRepo;

    public void save(Produit produit) {
        produitRepo.save(produit);
    }

    public Produit findByName(String name) {
        return produitRepo.findByNom(name);
    }

    public void create(Produit produit) {
        this.save(produit);
    }

    public Page<Produit> findAll(Pageable pageable){
        return produitRepo.findAll(pageable);
    }
}