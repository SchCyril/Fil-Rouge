package com.dev.filrouge.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

import com.dev.filrouge.dto.CommandeDto;
import com.dev.filrouge.model.Commande;
import com.dev.filrouge.service.CommandeService;
import com.dev.filrouge.service.UtilisateurService;

@RestController
@CrossOrigin
@RequestMapping("/Historique")
public class CommandeController {

	@Autowired
	private CommandeService commandeService;
	
	@Autowired
	private UtilisateurService utilisateurService;

	@PostMapping
	public void create(@RequestBody CommandeDto commandeDto) {
		Commande commandeNew = CommandeDto.toCommande(commandeDto);
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

	@GetMapping("/{id}")
	public Commande getCommandeUnique(@PathVariable Long id) {
		return commandeService.findById(id);
	}

	@GetMapping("/user/{id}")
	public List<Commande> getCommandeUserId(Principal principal, @PathVariable Long id) {
		System.out.println("test");
		System.out.println("aefafzazdfazazfafzé"+principal.toString()+" eeee");
		List<Commande> listeCommande = getCommande();
		List<Commande> res = new ArrayList<>();
		for (Commande c : listeCommande) {
			System.out.println("aefafzazdfazazfafzé"+utilisateurService.findByEmail(principal.getName()).getId());
			if (utilisateurService.findByEmail(principal.getName()).getId().equals(id)) {
				res.add(c);
			}
		}
		return res;
	}

	@DeleteMapping(value = "/{id}")
	public void deleteCommande(@PathVariable Long id) {
		commandeService.commandeRepository.deleteById(id);
	}

	@PutMapping
	public Commande updateCommande(@RequestBody Commande commande) {
		Commande commandeUpdate = new Commande(commande.getReference(), commande.getUtilisateur(),
				commande.getDateCommande(), commande.getDateLivraison(), commande.getPrixTotal(), commande.getEtat(),
				commande.getProduitCommandes());
		commandeService.commandeRepository.saveAndFlush(commandeUpdate);
		return commandeUpdate;
	}

	@GetMapping(value = "/{nom}/{prenom}/{prix}")
	public List<Commande> getCommandeBy(@PathVariable String nom, @PathVariable String prenom,
			@PathVariable String prix) {
		List<Commande> commandes = getCommande();
		List<Commande> res = new ArrayList<>();
		for (Commande c : commandes) {
			System.out.println(nom.trim());
			if ((c.getUtilisateur().getName().equals(nom.trim()) || nom.equals("default"))
					&& (c.getUtilisateur().getPrenom().equals(prenom.trim()) || prenom.equals("default"))
					&& (c.getPrixTotal() == Float.valueOf(prix) || prix.equals("0"))) {
				res.add(c);
			}
		}
		return res;
	}

}
