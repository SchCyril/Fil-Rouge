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
  @Input() index: number

  constructor(private _panierService: PanierService) { }

  ngOnInit() {

  }

  // removeElement(index:number){
  //   this._panierService.removeElement(index);
  // }
  removeElement() {
    this._panierService.removeElement(this.index);
  }

}
