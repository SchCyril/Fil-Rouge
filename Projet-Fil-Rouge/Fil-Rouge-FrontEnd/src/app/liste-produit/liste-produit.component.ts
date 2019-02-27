import { Component, OnInit } from '@angular/core';
import { Produit } from '../../app/modele';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {

  produits:Produit[];

  constructor(private _data:DataService) { }

  ngOnInit() {
    this._data.lister().subscribe(value => {
     this.produits = value;
     console.log(value)
    }
     
    )
  }

}
