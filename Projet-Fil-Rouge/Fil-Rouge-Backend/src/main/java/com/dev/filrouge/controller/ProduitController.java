package com.dev.filrouge.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.Produit;
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
		Produit produitCreate = new Produit(action.get("nom"),action.get("desc"),Float.parseFloat(action.get("prix")),
				action.get("categorie"),action.get("sous_categorie"),action.get("image"),
				Integer.parseInt(action.get("stock")),Boolean.parseBoolean(action.get("actif")),null
				);
		produitService.create(produitCreate);
		return produitCreate;
	}


    //Liste paginée sans critère
    @GetMapping
    public List<Produit> getMethodName(@RequestParam int pageNb) {
        Pageable page = (Pageable) PageRequest.of(pageNb, 10);
        return produitService.produitRepo.findAll(page).getContent();
    }

    //Liste paginée avec critères
    @PostMapping(value="critere")
    public List<Produit> postMethodName(@RequestBody Map<String, String> action) {
        return produitRepoImpl.search(Integer.parseInt(action.get("page")), action.get("name"), action.get("categorie"), action.get("sousCategorie"), action.get("prix"), true);
    }
    
    @PutMapping
    public Produit updateProduit(@RequestBody Map<String,String> action) {
    	Produit produitUpdate = new Produit(Long.parseLong(action.get("id")),action.get("nom"),action.get("desc"),Float.parseFloat(action.get("prix")),
				action.get("categorie"),action.get("sous_categorie"),action.get("image"),
				Integer.parseInt(action.get("stock")),Boolean.parseBoolean(action.get("actif")),null
				);
    	 produitService.produitRepo.save(produitUpdate);
    	 return produitUpdate;
    } 
    
    @DeleteMapping(value="id")
    public void deleteProduit(@PathVariable Long id) {
    	boolean estPresent=false;
    	List<Commande> commandes = commandeService.commandeRepository.findAll();
    	FIN:for(Commande commande : commandes) {
    		List<Produit> produits = commande.getProduit();
    		for(Produit produit : produits) {
    			if(produit.getId().equals(id)) {
    				estPresent=true;
    				break FIN;
    			}
    		}
    	}
    	if(!estPresent) {
			produitService.produitRepo.delete(produitService.produitRepo.findById(id).get());
    	}
    }
	
}