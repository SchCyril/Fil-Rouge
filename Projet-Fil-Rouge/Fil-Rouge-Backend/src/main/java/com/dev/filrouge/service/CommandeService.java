package com.dev.filrouge.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.repo.CommandeRepo;
import com.dev.filrouge.repo.ProduitRepo;

@Service
public class CommandeService {
    @Autowired
    public CommandeRepo commandeRepository;
    
    @Autowired
    public ProduitRepo produitRepository;

    public void save(Commande commande) {
		commande.getProduitCommandes().forEach(pc -> pc.getId().setCommande(commande));
    	commandeRepository.save(commande);
    }
    
	public void create(Commande commande) {
		commandeRepository.save(commande);
	}
	
	public List<Commande> findAll() {
		return commandeRepository.findAll();
	}
	
	public Commande findById(Long id) {
		return commandeRepository.findById(id).get();
	}
	
	public void delete(Long id) {
		commandeRepository.deleteById(id);
	}
}
