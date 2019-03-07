import { Component, OnInit } from '@angular/core';
import { Commande } from '../model';
import { CommandeService } from '../service/commande.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-commande-utilisateur',
  templateUrl: './commande-utilisateur.component.html',
  styleUrls: ['./commande-utilisateur.component.css']
})
export class CommandeUtilisateurComponent implements OnInit {

  list_commande: Commande[] = []
  utilisateurId: number

  constructor(private _srv: CommandeService, private _loginService: LoginService) {

  }
  ngOnInit() {
    this._loginService.loggedInUser().subscribe(
      value => {
        this.utilisateurId = value.id;
        this._srv.getListeCommandeUser(this.utilisateurId).subscribe(
          value => {
            this.list_commande = value
          })
      })
  }

}
