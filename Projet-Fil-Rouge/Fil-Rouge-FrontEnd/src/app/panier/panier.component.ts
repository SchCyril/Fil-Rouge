import { Component, OnInit, Input } from '@angular/core';
import { Produit, Commande, PanierItems } from '../model';
import { PanierService } from '../service/panier.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits: Produit[]
  commande: Commande;
  prixTotal: number = 0;
  listePanier: PanierItems[] = []

  constructor(private _panierService: PanierService) { }

  ngOnInit() {
    this.produits = this._panierService.lister()
    this.prixTotal = this.calcul();
    this.remplissageMap()
  }

  setListe() {
    this.produits = this._panierService.lister()
  }
  deleteProduit(index: number) {
    this._panierService.deleteProduitPanier(index)
    this.setListe()
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
}
