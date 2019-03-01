import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';

@Component({
  selector: 'app-fiche-detail-produit',
  templateUrl: './fiche-detail-produit.component.html',
  styleUrls: ['./fiche-detail-produit.component.css']
})
export class FicheDetailProduitComponent implements OnInit {

  @Input() produit: Produit

  constructor() { }

  ngOnInit() {
  }

}
