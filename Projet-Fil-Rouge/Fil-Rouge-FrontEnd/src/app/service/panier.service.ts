import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

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
export class ProduitService {

    produits: Produit[] = []

    constructor(private _http: HttpClient) {
    }

    ajoutproduitPanier(produit: Produit) {
        this.produits.push(produit);
    }


    deleteProduitPanier(index: number) {
        console.log(index);
        this.produits.splice(index, 1);
    }
}
    


}
