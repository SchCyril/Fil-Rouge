package com.dev.filrouge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.service.CommandeService;

@RestController
@CrossOrigin
@RequestMapping("/Historique")
public class CommandeController {
	@Autowired
	private CommandeService commandeService;


	@PostMapping
	public void create(@RequestBody Commande commande) {
		commandeService.save(commande);
	}

	@GetMapping
	public List<Commande> getCommande() {
		return commandeService.findAll();
	}
	
	@GetMapping("/{id}")
	public Commande getCommandeUnique(@PathVariable Long id) {
		return commandeService.findById(id);
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteCommande(@PathVariable Long id) {
		commandeService.commandeRepository.deleteById(id);
	}
	@PutMapping
    public Commande updateCommande(@RequestBody Commande commande) {
    	Commande commandeUpdate = new Commande(commande.getReference(),commande.getUtilisateur(),
    			commande.getDateCommande(),commande.getDateLivraison(),commande.getPrixTotal(),commande.getEtat(),commande.getProduitCommandes());
    	 commandeService.commandeRepository.saveAndFlush(commandeUpdate);
    	 return commandeUpdate;
    } 
}
