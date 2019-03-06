import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Produit } from '../../app/model';
import { DataService } from '../service/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  produits: Produit[];
  @Input() categorie: string
  categorie2: string
  nom: string
  resultTotal: number = 0
  maxResultPerPage: number

  constructor(private _produitService: ProduitService, private route: ActivatedRoute) {
    this.categorie2 = route.snapshot.paramMap.get("cat")
    this.nom = route.snapshot.paramMap.get("nom")
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categorie2 = params.get('cat');
      this.nom = params.get('nom')

      // console.log("CAT1 :" + this.categorie);
      // console.log("CAT2 :" + this.categorie2)

      if (this.categorie2 == null && this.nom == null) {
        this.maxResultPerPage = 3
        this.categorie2 = this.categorie
      } else {
        this.maxResultPerPage = 10
      }



      this._produitService.usualSearch(1, this.nom, this.categorie2, "", this.maxResultPerPage).subscribe(
        value => {
          // console.log(value);
          this.produits = value.produits;
          this.resultTotal = value.resultNb;
        })
    });
  }

  counter(i: number) {
    return new Array(Math.ceil(i / 10))
  }

  search(pageActuelle: number, categorie: string) {
    // console.log("SCAT1 :" + categorie);
    this._produitService.usualSearch(pageActuelle, this.nom, categorie, "", this.maxResultPerPage).subscribe(
      value => {
        console.log(value);
        this.produits = value.produits;
        this.resultTotal = value.resultNb;
      }
    );
  }

}
