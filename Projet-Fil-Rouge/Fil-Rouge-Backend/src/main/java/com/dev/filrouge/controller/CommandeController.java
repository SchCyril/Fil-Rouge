package com.dev.filrouge.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.filrouge.dto.CommandeDto;
import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.ProduitCommande;
import com.dev.filrouge.service.CommandeService;

@RestController
@CrossOrigin
@RequestMapping("/Historique")
public class CommandeController {
	
	@Autowired
	private CommandeService commandeService;


	@PostMapping
	public void create(@RequestBody CommandeDto commandeDto) {
		System.out.println(commandeDto.getReference());
		//System.out.println(commandeDto.getUtilisateurId());
		System.out.println(commandeDto.getDateCommande());
		System.out.println(commandeDto.getDateLivraison());
		System.out.println(commandeDto.getPrixTotal());
		System.out.println(commandeDto.getEtat());
	//	System.out.println(commandeDto.getProduits());
		
		Commande commandeNew = commandeDto.toCommande(commandeDto);
		commandeService.save(commandeNew);
	}

	@GetMapping
	public List<Commande> getCommande() {
		return commandeService.findAll();
	}

	@GetMapping("/dto")
	public List<CommandeDto> getCommandeDto() {
		return commandeService.findAll().stream().map(c -> CommandeDto.toDto(c)).collect(Collectors.toList());
	}
	
	@DeleteMapping(value="/{id}")
	public void deleteCommande(@PathVariable Long id) {
		commandeService.commandeRepository.deleteById(id);
	}

}
