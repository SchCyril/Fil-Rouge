package com.dev.filrouge.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.dev.filrouge.model.Commande;
import com.dev.filrouge.model.ProduitCommande;
import com.dev.filrouge.model.Utilisateur;

public class CommandeDto {
	private Long id;
	private String reference;
	private Utilisateur utilisateur;
	private LocalDate dateCommande;
	private LocalDate dateLivraison;
	private float prixTotal;
	private String etat;
	private List<CommandeProduitDto> commandeProduits;
	private Integer utilisateurId;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getReference() {
		return reference;
	}
	public void setReference(String reference) {
		this.reference = reference;
	}
	public Utilisateur getUtilisateur() {
		return utilisateur;
	}
	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}
	public LocalDate getDateCommande() {
		return dateCommande;
	}
	public void setDateCommande(LocalDate dateCommande) {
		this.dateCommande = dateCommande;
	}
	public LocalDate getDateLivraison() {
		return dateLivraison;
	}
	public void setDateLivraison(LocalDate dateLivraison) {
		this.dateLivraison = dateLivraison;
	}
	public float getPrixTotal() {
		return prixTotal;
	}
	public void setPrixTotal(float prixTotal) {
		this.prixTotal = prixTotal;
	}
	public String getEtat() {
		return etat;
	}
	public void setEtat(String etat) {
		this.etat = etat;
	}
	public Integer getUtilisateurId() {
		return utilisateurId;
	}
	public void setUtilisateurId(Integer utilisateurId) {
		this.utilisateurId = utilisateurId;
	}	
	public List<CommandeProduitDto> getCommandeProduits() {
		return commandeProduits;
	}
	public void setCommandeProduits(List<CommandeProduitDto> commandeProduits) {
		this.commandeProduits = commandeProduits;
	}
	public static Commande toCommande(CommandeDto dto) {
		Commande commande = new Commande();
		commande.setId(dto.getId());
		commande.setDateCommande(dto.getDateCommande());
		commande.setDateLivraison(dto.getDateLivraison());
		commande.setPrixTotal(dto.getPrixTotal());
		commande.setEtat(dto.getEtat());
		
		List<ProduitCommande> produitCommandes = new ArrayList<>();
		dto.getCommandeProduits().forEach(pc -> produitCommandes.add(CommandeProduitDto.toModel(pc)));
		commande.setProduitCommandes(produitCommandes);
				
		Utilisateur utilisateur = new Utilisateur();
		utilisateur.setId(Long.valueOf(dto.getUtilisateurId()));
		commande.setUtilisateur(utilisateur);
		commande.setReference(dto.getReference());
		
		return commande;
	}
	
	public static CommandeDto toDto(Commande commande) {
		CommandeDto dto = new CommandeDto();
		
		dto.setDateCommande(commande.getDateCommande());
		dto.setDateLivraison(commande.getDateLivraison());
		dto.setEtat(commande.getEtat());
		dto.setId(commande.getId());
		dto.setUtilisateurId(commande.getUtilisateur().getId().intValue());
		dto.setPrixTotal(commande.getPrixTotal());
		dto.setReference(commande.getReference());
		dto.setUtilisateurId(commande.getUtilisateur().getId().intValue());
		List<CommandeProduitDto> commandeProduitDtos = new ArrayList<>();
		commande.getProduitCommandes().forEach(cpd -> commandeProduitDtos.add(CommandeProduitDto.toDto(cpd)));
		dto.setCommandeProduits(commandeProduitDtos);
		
		return dto;
	}
}
