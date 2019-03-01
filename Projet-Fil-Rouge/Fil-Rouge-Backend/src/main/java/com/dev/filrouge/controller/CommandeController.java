package com.dev.filrouge.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.Utilisateur;
import com.dev.filrouge.service.CommandeService;

@RestController
@CrossOrigin
@RequestMapping("/Historique")
public class CommandeController {
	@Autowired
	private CommandeService commandeService;


	@PostMapping
	public void create(@RequestBody Map<String, String> action) {
		List<Produit> produit = new ArrayList<>();
		Utilisateur users = new Utilisateur();
		commandeService.commandeRepository.save(new Commande(action.get("ref"), Integer.parseInt(action.get("n_client")), LocalDate.parse(action.get("date_creation")), LocalDate.parse(action.get("date_validation")), Float.parseFloat(action.get("prix_total")),action.get("etat"),null , null));
	}

	@GetMapping
	public List<Commande> getCommande() {
		return commandeService.commandeRepository.findAll();
	}

}
