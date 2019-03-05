import { Injectable } from '@angular/core';
import { Produit } from '../model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';
import { Command } from 'protractor';



const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    }),
    withCredentials: true
};
const URL_BACKEND = environment.backendUrl;

@Injectable({
    providedIn: 'root'
})

export class DataService {

    private listeProduit: Produit[] = [
    ]
    constructor(private _httpClient: HttpClient) {

    }

    // RECHERCHE PRODUIT VISITEUR

    
    lister() {
        return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits")
    }

    listerByCat() {
        //   return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits/"+cequetuveux)
    }
}