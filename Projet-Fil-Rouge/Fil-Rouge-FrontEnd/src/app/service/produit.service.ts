import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produit } from '../model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from "@angular/common/http";



const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {


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
}
