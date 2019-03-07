package com.dev.filrouge.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.ProduitPage;
import com.dev.filrouge.repo.ProduitRepoImpl;
import com.dev.filrouge.service.CommandeService;
import com.dev.filrouge.service.ProduitService;

@RestController
@CrossOrigin
@RequestMapping("/Produit")
public class ProduitController {

	@Autowired
	private ProduitService produitService;
	
	@Autowired
    ProduitRepoImpl produitRepoImpl;
	
	@Autowired
	CommandeService commandeService;
	
	@PostMapping
	public Produit create(@RequestBody Map<String,String> action) {
		Produit produitCreate = new Produit(action.get("nom"),action.get("description"),Float.parseFloat(action.get("prix")),
				action.get("categorie"),action.get("sousCategorie"),action.get("image"),
				Integer.parseInt(action.get("stock")),Boolean.parseBoolean(action.get("actif"))
				);
		produitService.create(produitCreate);
		return produitCreate;
	}

    @PostMapping(value = "/usualSearch")
    public ProduitPage searchProduitActif(@RequestBody Map<String, String> action) {
        return produitRepoImpl.searchNotAdmin(
            Integer.parseInt(action.get("page")),
            action.get("nom"),
            action.get("categorie"),
			action.get("sousCategorie"),
			Integer.parseInt(action.get("maxResult")));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping(value = "/adminSearch")
    public ProduitPage searchAllProduit(@RequestBody Map<String, String> action) {
        return produitRepoImpl.searchAdmin(
            Integer.parseInt(action.get("page")),
            action.get("name"),
            action.get("categorie"),
            action.get("sousCategorie"));
    }

    
    @PutMapping
    public Produit updateProduit(@RequestBody Produit produit) {
    	Produit produitUpdate = new Produit(produit.getId(),produit.getNom(),produit.getDescription(),
    			produit.getPrix(),produit.getCategorie(),produit.getSousCategorie(),produit.getImage(),produit.getStock(),
    			produit.isActif());
    	 produitService.produitRepo.saveAndFlush(produitUpdate);
    	 return produitUpdate;
    } 
    

    @GetMapping(value ="/{id}")
    public Produit getById(@PathVariable Long id) {
    	return produitService.produitRepo.findById(id).get();

    }
    
    
	
}