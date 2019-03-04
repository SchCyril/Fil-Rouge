import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-modification-produit-admin',
  templateUrl: './modification-produit-admin.component.html',
  styleUrls: ['./modification-produit-admin.component.css']
})
export class ModificationProduitAdminComponent implements OnInit {

  produitSave: Produit = {
    id: 0,
    nom: '',
    description: '',
    prix: 0,
    categorie: '',
    sousCategorie: '',
    image: '',
    stock: 0,
    commande: null,
    actif: true
  }

  constructor(private _produitService: ProduitService) { }

  ngOnInit() {
    this._produitService.getIdModification().subscribe(
      value => {
        this.produitSave = value
      }
    )

  }

  modification() {
    this._produitService.modification(this.produitSave).subscribe()
  }

}
