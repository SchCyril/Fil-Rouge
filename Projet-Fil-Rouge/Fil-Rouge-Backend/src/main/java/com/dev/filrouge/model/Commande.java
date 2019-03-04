package com.dev.filrouge.model;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "commande")
@SequenceGenerator(name = "seq_commande_id")
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_commande_id")
    Long id;
    @Column
    String reference;
    @Column
    Integer n_client;
    @Column
    LocalDate dateCommande;
    @Column
    LocalDate dateLivraison;
    @Column
    float prixTotal;
    @Column
    String etat;
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "commande_id")
    List<ProduitCommande> produitCommandes;
    @ManyToOne
    Utilisateur utilisateur;

    public Commande() {

    }

    public Commande(String reference, Integer n_client, LocalDate dateCommande, LocalDate dateLivraison, float prixTotal, String etat, List<ProduitCommande> produitCommandes,
            Utilisateur utilisateur) {
    	this.reference = reference;
    	this.n_client = n_client;
        this.dateCommande = dateCommande;
        this.dateLivraison = dateLivraison;
        this.prixTotal = prixTotal;
        this.etat = etat;
        this.produitCommandes = produitCommandes;
        this.utilisateur = utilisateur;
    }

    public Integer getN_client() {
		return n_client;
	}

	public void setN_client(Integer n_client) {
		this.n_client = n_client;
	}

	public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReference() {
        return this.reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public LocalDate getDateCommande() {
        return this.dateCommande;
    }

    public void setDateCommande(LocalDate dateCommande) {
        this.dateCommande = dateCommande;
    }

    public LocalDate getDateLivraison() {
        return this.dateLivraison;
    }

    public void setDateLivraison(LocalDate dateLivraison) {
        this.dateLivraison = dateLivraison;
    }

    public float getPrixTotal() {
        return this.prixTotal;
    }

    public void setPrixTotal(float prixTotal) {
        this.prixTotal = prixTotal;
    }

    public String getEtat() {
        return this.etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public List<ProduitCommande> getProduitCommandes() {
        return this.produitCommandes;
    }

    public void setProduitCommandes(List<ProduitCommande> produitCommandes) {
        this.produitCommandes = produitCommandes;
    }

    public Utilisateur getUtilisateur() {
        return this.utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", reference='" + getReference() + "'" +", n_client=" + getN_client() + ", dateCommande='"
                + getDateCommande() + "'" + ", dateLivraison='" + getDateLivraison() + "'" + ", prixTotal='"
                + getPrixTotal() + "'" + ", etat='" + getEtat() + "'" + ", produit='" + getProduitCommandes() + "'"
                + ", utilisateur='" + getUtilisateur() + "'" + "}";
    }
}
    
    
	