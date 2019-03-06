import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

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



  constructor(private _login: LoginService, private router: Router) { }

  ngOnInit() {
  }

  connexion() {
    this._login.connect(this.utilisateur)
  }

  goToSignUpPage() {
    this.router.navigate(["/SignUp"])
  }
}
