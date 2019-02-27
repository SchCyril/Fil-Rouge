package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.repo.ProduitRepo;

public class ProduitService {
	
	@Autowired
	ProduitRepo produitRepo;
	
	public void save(Produit produit) {
		produitRepo.save(produit);
	}
	
	public Produit findByName(String name) {
		return produitRepo.findByName(name);
	}
	
	public void create(Produit produit) {
		this.save(produit);
	}

}
