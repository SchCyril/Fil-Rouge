package com.dev.filrouge.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.ProduitCommande;
import com.dev.filrouge.model.ProduitCommandeId;
import com.dev.filrouge.repo.CommandeRepo;
import com.dev.filrouge.repo.ProduitRepo;

@Service
public class CommandeService {
    @Autowired
    public CommandeRepo commandeRepository;
    
    @Autowired
    public ProduitRepo produitRepository;

    public void save(Commande commande) {
    	List<ProduitCommande> produitCommandes = commande.getProduitCommandes();
    	commande.setProduitCommandes(new ArrayList<ProduitCommande>());
    	
    	Commande savedCommande = commandeRepository.save(commande);
    	
    	produitCommandes.forEach(pc -> {
    		pc.setId(new ProduitCommandeId());
    		pc.getId().setCommandeId(savedCommande.getId());
    		pc.getId().setProduitId(pc.getProduit().getId());
    	});
    	
    	savedCommande.setProduitCommandes(produitCommandes);
    	commandeRepository.save(savedCommande);
    }
    
	public void create(Commande commande) {
		commandeRepository.save(commande);
	}
	
	public List<Commande> findAll() {
		return commandeRepository.findAll();
	}	
}
