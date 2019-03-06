import { Component, OnInit, Input } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande, Produit } from '../model';

@Component({
  selector: 'app-liste-produit-commande-admin',
  templateUrl: './liste-produit-commande-admin.component.html',
  styleUrls: ['./liste-produit-commande-admin.component.css']
})
export class ListeProduitCommandeAdminComponent implements OnInit {
  @Input() produit: Produit
  constructor(private _srv: CommandeService) { }

  ngOnInit() {
  }

}
