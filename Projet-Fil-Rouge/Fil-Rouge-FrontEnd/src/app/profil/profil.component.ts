import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  utilisateur= {
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

  newPassword:string
  newPasswordConfirmed:string


  constructor(private _loginService:LoginService) { }

  ngOnInit() {
    this._loginService.loggedInUser().subscribe(
      value => {
        this.utilisateur = value;
        console.log(this.utilisateur)
      }
    )
  }


  update(){
    // this.newPassword = this.newPassword.trim();
    // this.newPasswordConfirmed = this.newPasswordConfirmed.trim();

    if(this.newPassword===this.newPasswordConfirmed){
      this._loginService.updateUser(this.utilisateur)
    }
  }
}
