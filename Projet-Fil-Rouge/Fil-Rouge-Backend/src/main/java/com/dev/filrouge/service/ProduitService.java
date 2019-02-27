package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.repo.ProduitRepo;

@Service
public class ProduitService {
	
	@Autowired
	ProduitRepo produitRepo;
	
	public void save(Produit produit) {
		produitRepo.save(produit);
	}
	
	public Produit findByName(String name) {
		return produitRepo.findByNom(name);
	}
	
	public void create(Produit produit) {
		this.save(produit);
	}

}
