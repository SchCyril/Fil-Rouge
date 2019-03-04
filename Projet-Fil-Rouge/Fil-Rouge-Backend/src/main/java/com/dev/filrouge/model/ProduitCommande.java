package com.dev.filrouge.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ProduitCommande {
	
	@EmbeddedId
	private ProduitCommandeId id;

//	@JsonIgnore
//	@ManyToOne
//	@JoinColumn(name = "commande_id", insertable = false, updatable = false)
//	private Commande commande;
	
	@ManyToOne
	@JoinColumn(name = "produit_id", insertable = false, updatable = false)
	private Produit produit;

	private Long quantite;
	
	public ProduitCommandeId getId() {
		return id;
	}

	public void setId(ProduitCommandeId id) {
		this.id = id;
	}

//	public Commande getCommande() {
//		return commande;
//	}
//
//	public void setCommande(Commande commande) {
//		this.commande = commande;
//	}

	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	public Long getQuantite() {
		return quantite;
	}

	public void setQuantite(Long quantite) {
		this.quantite = quantite;
	}
	
}
