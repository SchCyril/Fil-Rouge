import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commande } from './model'
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private _http: HttpClient) { }


  afficher(): Observable<Commande[]> {
    return this._http.get<Commande[]>("http://localhost:8080/Historique")
  }
}
