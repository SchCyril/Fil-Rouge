import { Component, OnInit } from '@angular/core';
import { Produit, Commande } from '../model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits:Produit[];
  commande:Commande;

  constructor(private _data:DataService) { }

  ngOnInit() {

    this._data.lister().subscribe(value => {
      console.log(value);
      this.produits = value;

      
    });
  }

}
