import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commande, Utilisateur, Produit } from '../model';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  idModif: number
  refModif: string
  prixTotalModif: number


  constructor(private _http: HttpClient) { }


  afficher(): Observable<Commande[]> {
    return this._http.get<Commande[]>("http://localhost:8080/Historique")
  }

  getCommande(id: number): Observable<Commande> {
    return this._http.get<Commande>("http://localhost:8080/Historique/" + id);
  }

  setIdModification(id: number) {
    this.idModif = id
  }
  // setRefModification(ref: string) {
  //   this.refModif = ref
  // }
  // setPrixTotalModification(prixTotal: number) {
  //   this.prixTotalModif = prixTotal
  // }
  getIdModification(): Observable<Commande> {
    return this._http.get<Commande>("http://localhost:8080/Historique/" + this.idModif)
  }

  deleteCommande(): Observable<Object> {
    console.log(this.idModif)
    return this._http.delete("http://localhost:8080/Historique/" + this.idModif)
  }

  modifCommande(commande: Commande): Observable<Object> {
    console.log("Est ce que ca marche ?")
    return this._http.put("http://localhost:8080/Historique", commande, httpOptions)

  }
}
