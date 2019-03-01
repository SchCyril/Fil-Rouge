import { Injectable } from '@angular/core';
import { Produit } from '../model';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map, catchError } from 'rxjs/operators';

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
        //{
        //     nom: "wow",
        //     desc: "trop bien",
        //     prix: 10,
        //     categorie: "jeu",
        //     sous_categorie: "mmo",
        //     image: "https://media.senscritique.com/media/000017714825/source_big/World_of_Warcraft_Battle_for_Azeroth.jpg",
        //     stock: 50,
        //     commande: null,
        //     actif: true,
        // },
        // {
        //     nom: "apex",
        //     desc: "nouveau battle royal",
        //     prix: 0,
        //     categorie: "jeu",
        //     sous_categorie: "br",
        //     image: "https://media.senscritique.com/media/000018355902/source_big/Apex_Legends.jpg",
        //     stock: 50,
        //     commande: null,
        //     actif: true,
        // },
        // {
        //     nom: "Fifa",
        //     desc: "la référence du jeu de foot",
        //     prix: 0,
        //     categorie: "jeu",
        //     sous_categorie: "foot",
        //     image: "http://lireauhavre.fr/sites/default/files/fifa-19-ronaldo.jpg",
        //     stock: 50,
        //     commande: null,
        //     actif: true,
        // }

        

    ]
    constructor(private _httpClient: HttpClient) {

    }
    lister() {
        // if (this.listeProduit.length > 0) {
        //   return of(this.listeProduit);
        // } else {
          return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits")
        //     .pipe(
        //       map(colServeur => colServeur.map(unColServeur => <Produit>{
        //         nom: unColServeur.nom,
        //         desc: unColServeur.desc,
        //         prix: unColServeur.prix,
        //         categorie:unColServeur.categorie,
        //         sous_categorie:unColServeur.sous_categorie,
        //         image:unColServeur.image,
        //         stock:unColServeur.stock,
        //         commande:unColServeur.commande,
        //         actif:unColServeur.actif
        //       })),
        //       tap(tab => {
        //         this.listeProduit = tab;
        //       })
        //     );
        // }
      }

      listerByCat(){
        //   return this._httpClient.get<Produit[]>(URL_BACKEND + "/ListeProduits/"+cequetuveux)
      }
}