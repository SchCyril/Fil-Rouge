package com.dev.filrouge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.repo.CommandeRepo;

@Service
public class CommandeService {
    
    @Autowired
    public CommandeRepo commandeRepository;

    public void save(Commande commande) {
    	commandeRepository.save(commande);
    }
	public void create(Commande commande) {
		commandeRepository.save(commande);
	}	
    
}