import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produit } from '../model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from "@angular/common/http";

interface ProduitsFromServeur {
  resultNb: number
  pageCourante: number
  produits: Array<Produit>
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  idModif: number

  constructor(private _http: HttpClient) {
  }

  modification(produit: Produit): Observable<Object> {
    return this._http.put("http://localhost:8080/Produit", produit, httpOptions)
  }

  creation(produit: Produit): Observable<Object> {
    return this._http.post("http://localhost:8080/Produit", produit, httpOptions)
  }

  getAll(): Observable<Produit[]> {
    return this._http.get<Produit[]>("http://localhost:8080/ListeProduits")
  }


  setIdModification(id: number) {
    this.idModif = id
  }


  getIdModification(): Observable<Produit> {
    return this._http.get<Produit>("http://localhost:8080/Produit/" + this.idModif)
  }

  deleteProduit(): Observable<Object> {
    return this._http.delete("http://localhost:8080/ListeProduitsAdmin/" + this.idModif)
  }

  usualSearch(pageActuelle: number, nom: string, categorie: string, sousCategorie: string, maxResult: number): Observable<ProduitsFromServeur> {
    console.log("pageActuelle" + pageActuelle + " /nom : " + nom + " /categorie : " + categorie + " /sousCategorie : " + sousCategorie + " /maxResult : " + maxResult)
    return this._http.post<ProduitsFromServeur>("http://localhost:8080/Produit/usualSearch", { "page": pageActuelle, "nom": nom, "categorie": categorie, "sousCategorie": sousCategorie, "maxResult": maxResult }, httpOptions);
  }

  rechercheBy(nom: string, type: string): Observable<Produit[]> {
    if (nom === "")
      nom = "default"
    if (type === "")
      type = "default"
    return this._http.get<Produit[]>("http://localhost:8080/ListeProduitsAdmin/" + nom + "/" + type)
  }

}
