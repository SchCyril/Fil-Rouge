import { Component, OnInit } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {

  produit: Produit

  constructor(private _produitService: ProduitService, private _panierService: PanierService) { }

  ngOnInit() {

    this._produitService.getIdModification().subscribe(
      value => {
        this.produit = value
      }
    );

  }



  ajouterPanier() {
    this._panierService.ajoutproduitPanier(this.produit)
    console.log(this._panierService.produits)
  }
}
