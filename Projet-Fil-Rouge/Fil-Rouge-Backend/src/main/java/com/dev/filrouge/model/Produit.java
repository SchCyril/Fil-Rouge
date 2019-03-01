package com.dev.filrouge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "produit")
@SequenceGenerator(name = "seq_produit_id")
public class Produit {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_produit_id")
	Long id;
	@Column
	String nom;
	@Column
	String description;
	@Column
	float prix;
	@Column
	String categorie;
	@Column
	String sousCategorie;
	@Column
	String image;
	@Column
	int stock;
	@Column
	boolean actif;
	@ManyToOne
	Commande commande;

	public Produit() {

	}

	public Produit(Long id,String nom, String description, float prix, String categorie, String sousCategorie, String image,
			int stock, boolean actif, Commande commande) {
		super();
		this.id=id;
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.categorie = catégorie;
		this.sousCategorie = sousCategorie;
		this.image = image;
		this.stock = stock;
		this.actif = actif;
		this.commande = commande;
	}
	
	public Produit(String nom, String description, float prix, String categorie, String sousCategorie, String image,
			int stock, boolean actif, Commande commande) {
		super();
		this.nom = nom;
		this.description = description;
		this.prix = prix;
		this.categorie = categorie;
		this.sousCategorie = sousCategorie;
		this.image = image;
		this.stock = stock;
		this.actif = actif;
		this.commande = commande;
	}

	public boolean isActif() {
		return actif;
	}

	public void setActif(boolean actif) {
		this.actif = actif;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrix() {
		return prix;
	}

	public void setPrix(float prix) {
		this.prix = prix;
	}

	public String getCategorie() {
		return categorie;
	}
                 
	public void setCategorie(String categorie) {
		this.categorie = categorie;
	}

	public String getSousCategorie() {
		return sousCategorie;
	}

	public void setSousCategorie(String sousCategorie) {
		this.sousCategorie = sousCategorie;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public Long getId() {
		return id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}