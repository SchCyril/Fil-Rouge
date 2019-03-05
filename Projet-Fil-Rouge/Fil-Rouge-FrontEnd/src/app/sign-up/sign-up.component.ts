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
    role: 'REGISTER',
    liste_commandes: null
  }
  pswdConfirmed: string

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  createUser() {
    console.log(this.utilisateur);
    if (this.utilisateur.password == this.pswdConfirmed) {
      this._loginService.createUser(this.utilisateur).subscribe(
        value => this._loginService.connect(this.utilisateur).subscribe(
          value => {
            if (value.role == "ADMIN") {
              this.router.navigate(["/Admin"])
              location.reload()
            } else {
              this.router.navigate(["/Accueil"])
              location.reload()
            }
          },
          err => console.log(err + " : no user found")
        ))
    }
  }

  goToLoginPage() {
    this.router.navigate(['/Login'])
  }

}
