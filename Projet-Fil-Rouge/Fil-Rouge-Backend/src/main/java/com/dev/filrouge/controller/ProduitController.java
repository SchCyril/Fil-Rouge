package com.dev.filrouge.controller;

import java.util.List;
import java.util.Map;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.repo.ProduitRepo;
import com.dev.filrouge.repo.ProduitRepoImpl;
import com.dev.filrouge.service.ProduitService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin
@RequestMapping("/produit")
public class ProduitController{

    //Les 2 méthodes sont à tester

    // @Autowired
    // ProduitRepo produitRepo;

    @Autowired
    ProduitService produitService;

    @Autowired
    ProduitRepoImpl produitRepoImpl;

    @PostMapping
	public void create(@RequestBody Map<String,String> action) {
		produitService.create(new Produit(action.get("nom"),action.get("desc"),Float.parseFloat(action.get("prix")),
				action.get("categorie"),action.get("sous_categorie"),action.get("image"),
				Integer.parseInt(action.get("stock")),Boolean.parseBoolean(action.get("actif")),null
				));
		System.out.println("etsté");
	}

    //Liste paginée sans critère
    @GetMapping 
    public List<Produit> getMethodName(@RequestParam int pageNb) {
        Pageable page = (Pageable) PageRequest.of(pageNb, 10);
        return produitService.findAll(page).getContent();
    }

    //Liste paginée avec critères
    @PostMapping(value="critere")
    public List<Produit> postMethodName(@RequestBody Map<String, String> action) {
        return produitRepoImpl.search(Integer.parseInt(action.get("page")), action.get("name"), action.get("categorie"), action.get("sousCategorie"), action.get("prix"), true);
    }
    
    
}