import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  // utilisateur = {
  //   nom: '',
  //   password: '',
  //   mail:''
  // }

  utilisateur = {
    id: null,
    nom: '',
    prenom: '',
    adresse: '',
    num_tel:null,
    mail: '',
    date_naissance: null,
    password: '',
    num_client: '',
    role: '',
    liste_commandes:null
  }



  constructor(private _login: LoginService) { }

  ngOnInit() {
  }

  connexion() {
     this._login.connect(this.utilisateur).subscribe(
       value => {
        console.log(value)
       },
       err => console.log("no user found")
       )
  }
}
