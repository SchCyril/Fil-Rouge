import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

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

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i % 10);
  }

  search(pageActuelle:number) {
    this._data.usualSearch(pageActuelle, this.nom, this.categorie, this.sousCategorie).subscribe(
      value => {
        console.log(value);
        this.resultTotal = value.resultNb;
      }
    );
  }

}
