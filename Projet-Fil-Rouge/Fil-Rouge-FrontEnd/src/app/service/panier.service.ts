import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { HttpHeaders } from "@angular/common/http";
import { Produit } from '../model';



const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
};

@Injectable({
    providedIn: 'root'
})
export class PanierService {

    produits: Produit[] = [{
        id: 5,
        nom: 'test',
        description: 'etstetst',
        prix: 10,
        categorie: 'Jeux',
        sousCategorie: 'RPG',
        image: 'ert',
        stock: 20,
        commande: null,
        actif: true
    },
    {
        id: 6,
        nom: 'teerst',
        description: 'eertstetst',
        prix: 10,
        categorie: 'Jeux',
        sousCategorie: 'Aventure',
        image: 'ert',
        stock: 20,
        commande: null,
        actif: true
    },
    {
        id: 9,
        nom: 'Hearthstone',
        description: 'cartes',
        prix: 0,
        categorie: 'Jeux',
        sousCategorie: 'stratégie',
        image: 'ferfg',
        stock: 20,
        commande: null,
        actif: true
    }
]

    constructor(private _http: HttpClient) {
    }


    ngOnInit() {

    }
    ajoutproduitPanier(produit: Produit) {
        this.produits.push(produit);
    }


    deleteProduitPanier(index: number) {
        console.log(index);
        this.produits.splice(index, 1);
        return of(this.produits)
       
    }

    removeElement(index:number) {
        
        //document.getElementById("accordionExample").remove();
        
        this.produits.splice(index, 1); }
}
