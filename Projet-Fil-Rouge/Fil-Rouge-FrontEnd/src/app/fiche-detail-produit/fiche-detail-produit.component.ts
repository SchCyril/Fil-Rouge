import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-fiche-detail-produit',
  templateUrl: './fiche-detail-produit.component.html',
  styleUrls: ['./fiche-detail-produit.component.css']
})
export class FicheDetailProduitComponent implements OnInit {

  @Input() produit: Produit

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.setId(id)
    this._produitService.deleteProduit().subscribe(value => { location.reload(); });
  }

  setId(id: number) {
    this._produitService.setIdModification(id)
  }
}
