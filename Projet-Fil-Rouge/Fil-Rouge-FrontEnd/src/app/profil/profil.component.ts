import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  utilisateur = {
    id: null,
    name: '',
    prenom: '',
    adresse: '',
    telephone: null,
    email: '',
    datenaissance: null,
    password: '',
    num_client: '',
    role: '',
    liste_commandes: null
  }

  newPassword: string = ''
  newPasswordConfirmed: string = ''


  constructor(private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.loggedInUser().subscribe(
      value => {
        this.utilisateur = value;
      }
    )
  }


  update() {
    this.newPassword = this.newPassword.trim();
    this.newPasswordConfirmed = this.newPasswordConfirmed.trim();

    if (this.newPassword === this.newPasswordConfirmed) {

      if (this.newPassword === '') {
        this.utilisateur.password = null
        this._loginService.updateUser(this.utilisateur)
      } else {
        this.utilisateur.password = this.newPassword
        this._loginService.updateUser(this.utilisateur)
      }
    }
  }
}
