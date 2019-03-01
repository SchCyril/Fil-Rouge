import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Produit } from '../model';

@Component({
  selector: 'app-liste-dvd',
  templateUrl: './liste-dvd.component.html',
  styleUrls: ['./liste-dvd.component.css']
})
export class ListeDvdComponent implements OnInit {

  produits:Produit[];
  constructor(private _data:DataService) { }

  ngOnInit() {
    // this._data.listerByCat().subscribe(value => {
    //   console.log(value)
    //  this.produits = value;
     
    // }
     
    //)
  }

}
