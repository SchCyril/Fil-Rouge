import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';

@Component({
  selector: 'app-liste-produits-utilisateur',
  templateUrl: './liste-produits-utilisateur.component.html',
  styleUrls: ['./liste-produits-utilisateur.component.css']
})
export class ListeProduitsUtilisateurComponent implements OnInit {

  @Input() produit: Produit

  constructor() { }

  ngOnInit() {
  }

}
