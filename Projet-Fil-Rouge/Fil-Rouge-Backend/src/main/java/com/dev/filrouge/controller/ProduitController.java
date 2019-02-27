package com.dev.filrouge.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.service.ProduitService;

@RestController
@CrossOrigin
@RequestMapping("/CreerProduit")
public class ProduitController {

	@Autowired
	private ProduitService produitService;
	
	@PostMapping
	public void create(@RequestBody Map<String,String> action) {
		produitService.create(new Produit(action.get("nom"),action.get("desc"),Float.parseFloat(action.get("prix")),
				action.get("categorie"),action.get("sous_categorie"),action.get("image"),
				Integer.parseInt(action.get("stock")),Boolean.parseBoolean(action.get("actif")),null
				));
		System.out.println("etsté");
	}
	
}
