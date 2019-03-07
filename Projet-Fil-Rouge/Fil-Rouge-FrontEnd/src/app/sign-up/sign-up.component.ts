import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

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
    role: 'ADMIN',
    liste_commandes: null
  }
  pswdConfirmed: string

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  createUser() {

    if (this.utilisateur.password == this.pswdConfirmed) {
      this._loginService.createUser(this.utilisateur).subscribe(
        value => this._loginService.connect(this.utilisateur)
      )
    }
  }

  goToLoginPage() {
    this.router.navigate(['/Login'])
  }

}
