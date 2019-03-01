import { Injectable } from '@angular/core';
import { Produit } from '../model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Command } from 'protractor';

interface ProduitsFromServeur {
    resultNb: number
    pageCourante: number
    produits: Array<Produit>
}

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
};


const URL_BACKEND = environment.backendUrl;
// const httpOptions = {
//     headers: new HttpHeaders({
//       "Content-Type": "application/json"
//     })
//   };

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private listeProduit: Produit[] = [
    ]
    constructor(private _httpClient: HttpClient) {

    }

    // RECHERCHE PRODUIT VISITEUR

    usualSearch(pageActuelle: number, nom: string, categorie: string, sousCategorie: string): Observable<ProduitsFromServeur> {
        console.log("pageActuelle" + pageActuelle + " nom : " + nom + " / categorie : " + categorie + " /sousCategorie : " + sousCategorie)
        return this._httpClient.post<ProduitsFromServeur>("http://localhost:8080/CreerProduit/usualSearch", { "page": pageActuelle, "nom": nom, "categorie": categorie, "sousCategorie": sousCategorie }, httpOptions);
    }
    lister() {
        return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits")
    }

    listerByCat() {
        //   return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits/"+cequetuveux)
    }
}