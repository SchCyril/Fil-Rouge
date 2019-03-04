import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  nom: string = ""
  categorie: string = ""
  sousCategorie: string = ""
  resultTotal: number = 0

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i % 10);
  }

  search(pageActuelle:number) {
    this._produitService.usualSearch(pageActuelle, this.nom, this.categorie, this.sousCategorie, 10).subscribe(
      value => {
        console.log(value);
        this.resultTotal = value.resultNb;
      }
    );
  }

}
