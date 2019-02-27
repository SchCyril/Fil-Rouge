package com.dev.filrouge.model;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "commande")
@SequenceGenerator(name = "seq_commande_id")
public class Commande {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_commande_id")
    Long id;
    @Column
    String reference;
    @Column
    Date dateCommande;
    @Column
    Date dateLivraison;
    @Column
    float prixTotal;
    @Column
    String etat;
    @OneToMany
    List<Produit> produit = new ArrayList<>();
    @ManyToOne
    Utilisateur utilisateur;

    public Commande() {

    }

    public Commande(Date dateCommande, Date dateLivraison, float prixTotal, String etat, List<Produit> produit,
            Utilisateur utilisateur) {
        this.dateCommande = dateCommande;
        this.dateLivraison = dateLivraison;
        this.prixTotal = prixTotal;
        this.etat = etat;
        this.produit = produit;
        this.utilisateur = utilisateur;
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

    public Date getDateCommande() {
        return this.dateCommande;
    }

    public void setDateCommande(Date dateCommande) {
        this.dateCommande = dateCommande;
    }

    public Date getDateLivraison() {
        return this.dateLivraison;
    }

    public void setDateLivraison(Date dateLivraison) {
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

    public List<Produit> getProduit() {
        return this.produit;
    }

    public void setProduit(List<Produit> produit) {
        this.produit = produit;
    }

    public Utilisateur getUtilisateur() {
        return this.utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", reference='" + getReference() + "'" + ", dateCommande='"
                + getDateCommande() + "'" + ", dateLivraison='" + getDateLivraison() + "'" + ", prixTotal='"
                + getPrixTotal() + "'" + ", etat='" + getEtat() + "'" + ", produit='" + getProduit() + "'"
                + ", utilisateur='" + getUtilisateur() + "'" + "}";
    }
}