import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit.service';
import { Produit } from '../model';

@Component({
  selector: 'app-liste-produits-admin',
  templateUrl: './liste-produits-admin.component.html',
  styleUrls: ['./liste-produits-admin.component.css']
})
export class ListeProduitsAdminComponent implements OnInit {

  listeProduits: Produit[] = []
  p: number = 1

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    this._produitService.getAll().subscribe(
      value => {
        this.listeProduits = value
        console.log(value)
      })
  }

}
