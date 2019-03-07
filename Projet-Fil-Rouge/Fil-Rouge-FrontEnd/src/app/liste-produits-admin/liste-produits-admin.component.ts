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
  nom: string = ""
  type: string = ""

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    this._produitService.getAll().subscribe(
      value => {
        this.listeProduits = value
        console.log(value)
      })
  }

  recherche() {
    console.log(this.nom + " " + this.type)
    this._produitService.rechercheBy(this.nom, this.type).subscribe(
      value => this.listeProduits = value
    )
  }

}
