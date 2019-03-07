package com.dev.filrouge.model;

import java.util.ArrayList;
import java.util.List;

public class SearchCommande {

	Long id;
	String reference;
	Utilisateur utilisateur;
	float prixTotal;
	String etat;
	List<Commande> commandes = new ArrayList<>();

	public SearchCommande(Long id, String reference, Utilisateur utilisateur, float prixTotal, String etat,
			List<Commande> commandes) {
		super();
		this.id = id;
		this.reference = reference;
		this.utilisateur = utilisateur;
		this.prixTotal = prixTotal;
		this.etat = etat;
		this.commandes = commandes;
	}

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

	public List<Commande> getCommandes() {
		return commandes;
	}

	public void setCommandes(List<Commande> commandes) {
		this.commandes = commandes;
	}

}
