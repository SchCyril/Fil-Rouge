import { Component, OnInit, Input } from '@angular/core';
import { Produit, PanierItems, Commande, Utilisateur } from '../model';
import { PanierService } from '../service/panier.service';
import { map } from 'rxjs/operators';
import { CommandeService } from '../service/commande.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits: Produit[]
  prixTotal: number = 0;
  listePanier: PanierItems[] = []

  constructor(private _panierService: PanierService, private _commandeService: CommandeService, private _loginService: LoginService) { }

  ngOnInit() {
    this.produits = this._panierService.lister()
    this.prixTotal = this.calcul();
    this.remplissageMap()
  }

  refreshListe() {
    this.produits = this._panierService.lister()
  }

  deleteProduit(id: number) {
    this._panierService.deleteProduitPanier(id)
    this.refreshListe()
    this.prixTotal = this.calcul();
    this.remplissageMap();
  }

  calcul(): number {
    let aux: number = 0;
    for (let prix of this.produits) {
      aux += prix.prix
    }
    return aux;
  }

  remplissageMap() {
    this.listePanier = []
    for (let obj of this.produits) {
      let present: boolean = false
      for (let produits of this.listePanier) {
        if (produits.produitPanier.id === obj.id) {
          produits.quantite += 1;
          present = true;
        }
      }
      if (!present) {
        let produit: PanierItems = {
          "produitPanier": obj,
          "quantite": 1
        }
        this.listePanier.push(produit)
      }
    }
  }

  ValiderCommande() {

    let user: Utilisateur = null;
    this._loginService.loggedInUser().subscribe(
      value => user = value
    )


    let commande: Commande = {
      id: 0,
      produitCommandes: this.listePanier,
      utilisateur: user,
      ref: "COM" + 0,
      date_creation: "2019/03/06",
      date_validation: "2019/04/06",
      prixTotal: this.prixTotal,
      etat: "en cours"
    }
    this._commandeService.ajouterCommande(commande);
  }
}
