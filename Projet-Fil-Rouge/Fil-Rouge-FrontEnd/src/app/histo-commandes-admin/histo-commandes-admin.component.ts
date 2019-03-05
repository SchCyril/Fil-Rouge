import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande, Utilisateur, Produit } from '../model';

@Component({
  selector: 'app-histo-commandes-admin',
  templateUrl: './histo-commandes-admin.component.html',
  styleUrls: ['./histo-commandes-admin.component.css']
})
export class HistoCommandesAdminComponent implements OnInit {
  msg: string = "";
  list_commande: Commande[] = []
  constructor(private _srv: CommandeService) { }

  ngOnInit() {
    this._srv.afficher().subscribe(
      value => {
        this.list_commande = value
        console.log(value)
        console.log(value[0].produitCommandes)
      }
    )


  }
  delete(id: number) {
    this.setId(id)
    this._srv.deleteCommande().subscribe(value => { location.reload(); });
  }
  setId(id: number) {
    this._srv.setIdModification(id)
  }
}
