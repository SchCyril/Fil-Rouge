package com.dev.filrouge.model;

import java.util.ArrayList;
import java.util.List;

public class ProduitPage{
    int resultNb;
    int currentPage;
    List<Produit> produits = new ArrayList<>();


    public ProduitPage(int resultNb, int currentPage, List<Produit> produits) {
        this.resultNb = resultNb;
        this.currentPage = currentPage;
        this.produits = produits;
    }


    public int getResultNb() {
        return this.resultNb;
    }

    public void setResultNb(int resultNb) {
        this.resultNb = resultNb;
    }

    public int getCurrentPage() {
        return this.currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public List<Produit> getProduits() {
        return this.produits;
    }

    public void setProduits(List<Produit> produits) {
        this.produits = produits;
    }

}