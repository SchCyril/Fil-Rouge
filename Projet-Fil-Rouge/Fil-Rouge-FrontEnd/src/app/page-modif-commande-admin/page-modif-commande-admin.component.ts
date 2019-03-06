import { Component, OnInit, Input } from '@angular/core';
import { Commande, Produit } from '../model';
import { CommandeService } from '../service/commande.service';
import { reference } from '@angular/core/src/render3';

@Component({
  selector: 'app-page-modif-commande-admin',
  templateUrl: './page-modif-commande-admin.component.html',
  styleUrls: ['./page-modif-commande-admin.component.css']
})
export class PageModifCommandeAdminComponent implements OnInit {
  @Input() commande: Commande
  constructor(private _srv: CommandeService) { }

  commandeModifiee: Commande[] = []
  ngOnInit() {
    this._srv.afficher().subscribe(
      value => {
        this.commandeModifiee = value

      })
  }
  // modifCommande(id: number) {
  //   this.setId(id),
  //     // this.setRef(ref),
  //     // this.setPrixTotal(prixTotal)
  //     this._srv.modifCommande(this.commandeModifiee).subscribe();

  // }
  setId(id: number) {
    this._srv.setIdModification(id);
  }
  // setRef(ref: string) {
  //   this._srv.setRefModification(ref)
  // }
  // setPrixTotal(prixTotal: number) {
  //   this._srv.setPrixTotalModification(prixTotal)
  // }

}
