import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commande } from '../model'
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
  idModif: number

  afficher(): Observable<Commande[]> {
    return this._http.get<Commande[]>("http://localhost:8080/Historique")
  }
  setIdModification(id: number) {
    this.idModif = id
  }
  getIdModification(): Observable<Commande> {
    return this._http.get<Commande>("http://localhost:8080/Historique/" + this.idModif)
  }
  deleteCommande(): Observable<Object> {
    console.log(this.idModif)
    return this._http.delete("http://localhost:8080/Historique/" + this.idModif)
  }

  ajouterCommande(commande: Commande) {
    this._http.post("http://localhost:8080/Historique", commande, httpOptions).subscribe();
  }
}
