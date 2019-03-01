package com.dev.filrouge.controller;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.ProduitPage;
import com.dev.filrouge.repo.ProduitRepoImpl;
import com.dev.filrouge.service.ProduitService;

@RestController
@CrossOrigin
@RequestMapping("/CreerProduit")
public class ProduitController {

    @Autowired
    private ProduitService produitService;

    @Autowired
    ProduitRepoImpl produitRepoImpl;

    @PostMapping
    public void create(@RequestBody Map<String, String> action) {
        produitService.create(new Produit(action.get("nom"), action.get("desc"), Float.parseFloat(action.get("prix")),
                action.get("categorie"), action.get("sous_categorie"), action.get("image"),
                Integer.parseInt(action.get("stock")), Boolean.parseBoolean(action.get("actif")), null));
        System.out.println("etsté");
    }

    @PostMapping(value = "usualSearch")
    public ProduitPage searchProduitActif(@RequestBody Map<String, String> action) {
        return produitRepoImpl.searchNotAdmin(
            Integer.parseInt(action.get("page")),
            action.get("nom"),
            action.get("categorie"),
            action.get("sousCategorie"));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping(value = "adminSearch")
    public ProduitPage searchAllProduit(@RequestBody Map<String, String> action) {
        return produitRepoImpl.searchAdmin(
            Integer.parseInt(action.get("page")),
            action.get("name"),
            action.get("categorie"),
            action.get("sousCategorie"));
    }

}