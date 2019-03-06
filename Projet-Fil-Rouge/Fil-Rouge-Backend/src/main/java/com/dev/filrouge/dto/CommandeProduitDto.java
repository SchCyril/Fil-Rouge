package com.dev.filrouge.dto;

import com.dev.filrouge.model.Produit;
import com.dev.filrouge.model.ProduitCommande;
import com.dev.filrouge.model.ProduitCommandeId;

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
	
	public static ProduitCommande toModel(CommandeProduitDto dto) {
		ProduitCommande produitCommande = new ProduitCommande();
		ProduitCommandeId produitCommandeId = new ProduitCommandeId();
		
		Produit produit = new Produit(dto.getProduitId());
		produitCommandeId.setProduit(produit);
		produitCommande.setId(produitCommandeId);
		produitCommande.setQuantite(dto.getQuantite());
		
		return produitCommande;
	}
	
	public static CommandeProduitDto toDto(ProduitCommande model) {
		CommandeProduitDto dto = new CommandeProduitDto();
		
		dto.setProduitId(model.getId().getProduit().getId());
		dto.setQuantite(model.getQuantite());
		
		return dto;
	}
}
