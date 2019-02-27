package com.dev.filrouge.controller;

import java.util.List;
import java.util.Map;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.repo.ProduitRepo;
import com.dev.filrouge.repo.ProduitRepoImpl;

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

    @Autowired
    ProduitRepo produitRepo;

    @Autowired
    ProduitRepoImpl produitRepoImpl;

    //Liste paginée sans critère
    @GetMapping 
    public List<Produit> getMethodName(@RequestParam int pageNb) {
        Pageable page = (Pageable) PageRequest.of(pageNb, 10);
        return produitRepo.findAll(page).getContent();
    }

    //Liste paginée avec critères
    @PostMapping(value="critere")
    public List<Produit> postMethodName(@RequestBody Map<String, String> action) {
        return produitRepoImpl.search(Integer.parseInt(action.get("page")), action.get("name"), action.get("categorie"), action.get("sousCategorie"), action.get("prix"), true);
    }
    
    
}