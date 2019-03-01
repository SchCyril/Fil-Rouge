import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  utilisateur = {
    login: '',
    password: ''
  }



  constructor(private _login: LoginService) { }

  ngOnInit() {
  }

  connexion() {
    this._login.connect(this.utilisateur).subscribe(value => console.log(value));

  }
}
