import { Component, OnInit } from '@angular/core';
import { Produit, Commande } from '../model';
import { PanierService } from '../service/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  produits:Produit[] = [];
  commande:Commande;

  constructor(private _data:PanierService) { }

  ngOnInit() {
    this.produits=this._data.produits
    //     if(this._data.produits.length===0)
    //       this.setListe()
  }

  setListe(){
    this.produits=this._data.produits
  }
  deleteProduit(index : number){
    this._data.deleteProduitPanier(index).subscribe(value =>
    this.produits=value)
    
  }

}
