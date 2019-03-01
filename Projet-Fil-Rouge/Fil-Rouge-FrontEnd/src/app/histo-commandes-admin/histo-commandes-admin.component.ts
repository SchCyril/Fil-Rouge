import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande, Utilisateur } from '../model';

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
      }
    )
  }

}
