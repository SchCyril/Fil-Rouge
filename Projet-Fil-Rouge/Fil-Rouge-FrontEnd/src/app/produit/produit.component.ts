import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  
  @Input() produit: Produit;

  constructor(private _data: DataService) { }

  ngOnInit() {
  }

}
