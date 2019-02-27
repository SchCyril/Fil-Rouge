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
public class Produit{

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
    String catégorie;
    @Column
    String sousCategorie;
    @Column
    String image;
    @Column
    int stock;
    @ManyToOne
    Commande commande;

    public Produit(){

    }
}