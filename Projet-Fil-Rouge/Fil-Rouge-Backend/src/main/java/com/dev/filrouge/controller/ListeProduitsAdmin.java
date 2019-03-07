package com.dev.filrouge.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.ProduitCommande;
import com.dev.filrouge.service.CommandeService;
import com.dev.filrouge.service.ProduitService;

@RestController
@CrossOrigin
@RequestMapping("/ListeProduitsAdmin")
public class ListeProduitsAdmin {

	@Autowired
	private ProduitService produitService;
	
	@Autowired
	CommandeService commandeService;
	
	@DeleteMapping(value="/{id}")
    public void deleteProduit(@PathVariable Long id) {
    	boolean estPresent=false;
    	List<Commande> commandes = commandeService.commandeRepository.findAll();
    	FIN:for(Commande commande : commandes) {
    		List<ProduitCommande> produits = commande.getProduitCommandes();
    		for(ProduitCommande produit : produits) {
    			if(produit.getId().getProduit().getId().equals(id)) {
    				estPresent=true;
    				break FIN;
    			}
    		}
    	}
    	System.out.println(estPresent);
    	if(!estPresent) {
			produitService.produitRepo.delete(produitService.produitRepo.findById(id).get());
    	}
    }
	
    
    @GetMapping(value ="/{nom}/{type}")
    public List<Produit> rechercheBy(@PathVariable String nom, @PathVariable String type) {
		List<Produit> res = new ArrayList<>();
		for(Produit c : produitService.produitRepo.findAll()) {
			System.out.println(c.getNom());
			if(((c.getNom().trim()).equals(nom.trim())|| nom.equals("default")) && ((c.getCategorie().trim()).equals(type.trim()) || type.equals("default"))){
				res.add(c);
			}
		}
		return res;
    }
}
