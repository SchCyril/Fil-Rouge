package com.dev.filrouge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.service.ProduitService;

@RestController
@CrossOrigin
@RequestMapping("/ListeProduits")
public class ListeProduits {

	@Autowired
	private ProduitService produitService;
	
	
	@GetMapping
	public List<Produit> getAllProduit(){
		return produitService.produitRepo.findAll();
	}
	

}
