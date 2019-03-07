import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../service/commande.service';
import { Commande, Utilisateur, Produit } from '../model';

@Component({
  selector: 'app-histo-commandes-admin',
  templateUrl: './histo-commandes-admin.component.html',
  styleUrls: ['./histo-commandes-admin.component.css']
})
export class HistoCommandesAdminComponent implements OnInit {
  msg: string = "";
  list_commande: Commande[] = []
  nom: string = ""
  prenom: string = ""
  prix: number = 0


  constructor(private _srv: CommandeService) { }

  ngOnInit() {
    this._srv.afficher().subscribe(
      value => {
        this.list_commande = value

      })
  }

  delete(id: number) {
    this.setId(id)
    this._srv.deleteCommande().subscribe(value => { location.reload(); });
  }
  setId(id: number) {
    this._srv.setIdModification(id);
  }

  recherche() {
    console.log(this.nom + " " + this.prenom)
    this._srv.rechercheBy(this.nom, this.prenom, this.prix).subscribe(
      value => this.list_commande = value
    )
  }

}
