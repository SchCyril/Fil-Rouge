import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-fiche-detail-produit-panier',
  templateUrl: './fiche-detail-produit-panier.component.html',
  styleUrls: ['./fiche-detail-produit-panier.component.css']
})
export class FicheDetailProduitPanierComponent implements OnInit {

  produits: Produit[] = [];

  @Input() produit: Produit
  @Input() quantite: number
  @Input() index: number

  constructor(private _panierService: PanierService) { }

  ngOnInit() {
  }
  delete() {
    this._panierService.deleteProduitPanier(this.index)
  }

}
