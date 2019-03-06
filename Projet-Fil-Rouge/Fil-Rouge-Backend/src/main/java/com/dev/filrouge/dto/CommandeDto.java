package com.dev.filrouge.dto;

import java.time.LocalDate;
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
	private List<ProduitCommande> produits;
	
	
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
	public List<ProduitCommande> getProduits() {
		return produits;
	}
	public void setProduits(List<ProduitCommande> produits) {
		this.produits = produits;
	}
	
	public Commande toCommande(CommandeDto dto) {
		Commande commande = new Commande();
		commande.setId(dto.getId());
		commande.setDateCommande(dto.getDateCommande());
		commande.setDateLivraison(dto.getDateLivraison());
		commande.setPrixTotal(dto.getPrixTotal());
		commande.setEtat(dto.getEtat());
		commande.setProduitCommandes(dto.getProduits());
		commande.setUtilisateur(dto.getUtilisateur());
		commande.setReference(dto.getReference());

		
		
		return commande;
	}
}
