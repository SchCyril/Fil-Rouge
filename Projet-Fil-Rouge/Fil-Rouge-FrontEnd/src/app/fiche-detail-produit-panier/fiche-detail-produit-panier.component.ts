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

  @Input() produit: Produit

  constructor(private _panierService: PanierService) { }

  ngOnInit() {
    
  }

  delete(id: number) {
    this._panierService.deleteProduitPanier(id)
   
  }
}
