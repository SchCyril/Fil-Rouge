 package com.dev.filrouge.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
	
@Entity
public class ProduitCommande {
	
	@EmbeddedId
	private ProduitCommandeId id;
	private Long quantite;
	
	public ProduitCommandeId getId() {
		return id;
	}

	public void setId(ProduitCommandeId id) {
		this.id = id;
	}

	public Long getQuantite() {
		return quantite;
	}

	public void setQuantite(Long quantite) {
		this.quantite = quantite;
	}
	
}
