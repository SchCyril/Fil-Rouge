package com.dev.filrouge.dto;

public class CommandeProduitDto {
	private Long produitId;
	
	private Long quantite;

	public Long getProduitId() {
		return produitId;
	}

	public void setProduitId(Long produitId) {
		this.produitId = produitId;
	}

	public Long getQuantite() {
		return quantite;
	}

	public void setQuantite(Long quantite) {
		this.quantite = quantite;
	}
}
