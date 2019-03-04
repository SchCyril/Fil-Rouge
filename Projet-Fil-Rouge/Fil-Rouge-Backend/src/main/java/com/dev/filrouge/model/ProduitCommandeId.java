package com.dev.filrouge.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class ProduitCommandeId implements Serializable {
	
	private static final long serialVersionUID = -574779333497044141L;
	
	@Column(name = "produit_id")
	private Long produitId;

	@Column(name = "commande_id")
	private Long commandeId;

	public Long getProduitId() {
		return produitId;
	}

	public void setProduitId(Long produitId) {
		this.produitId = produitId;
	}

	public Long getCommandeId() {
		return commandeId;
	}

	public void setCommandeId(Long commandeId) {
		this.commandeId = commandeId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((commandeId == null) ? 0 : commandeId.hashCode());
		result = prime * result + ((produitId == null) ? 0 : produitId.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		ProduitCommandeId other = (ProduitCommandeId) obj;
		if (commandeId == null) {
			if (other.commandeId != null)
				return false;
		} else if (!commandeId.equals(other.commandeId))
			return false;
		if (produitId == null) {
			if (other.produitId != null)
				return false;
		} else if (!produitId.equals(other.produitId))
			return false;
		return true;
	} 
	
	
}
