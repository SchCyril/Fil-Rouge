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

    produits: Produit[]

    constructor(private _http: HttpClient) {
    }


    ngOnInit() {
    }

    lister(): Produit[] {
        this.produits = JSON.parse(localStorage.getItem('listePanier'))
        return this.produits
    }
    ajoutproduitPanier(produit: Produit) {
        if (this.produits === undefined || this.produits === null)
            this.produits = []
        this.produits.push(produit);
        localStorage.setItem('listePanier', JSON.stringify(this.produits))
    }


    deleteProduitPanier(id: number) {
        console.log(this.produits)
        let trouve: boolean = false
        for (let i = 0; i < this.produits.length; i++) {
            if (this.produits[i].id === id && !trouve) {
                this.produits.splice(i, 1);
                trouve = true;
            }
        }
        localStorage.setItem('listePanier', JSON.stringify(this.produits))
    }

    removeElement(index: number) {
        //document.getElementById("accordionExample").remove();
        this.produits.splice(index, 1);
    }
}
