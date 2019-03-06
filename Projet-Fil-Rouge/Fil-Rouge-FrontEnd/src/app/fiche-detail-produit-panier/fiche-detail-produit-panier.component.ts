import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-fiche-detail-produit-panier',
  templateUrl: './fiche-detail-produit-panier.component.html',
  styleUrls: ['./fiche-detail-produit-panier.component.css']
})
export class FicheDetailProduitPanierComponent implements OnInit {


  @Input() produit: Produit
  @Input() quantite: number
  @Input() index: number

  constructor(private _panierService: PanierService) { }

  ngOnInit() {
  }

}
