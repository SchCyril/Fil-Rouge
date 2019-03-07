import { Component, OnInit } from '@angular/core';
import { Utilisateur } from './model';
import { PanierService } from './service/panier.service';
import { LoginService } from './service/login.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  role: string;
  title = 'Fil-Rouge-Front';



  constructor(private _router: Router) {
  }

  ngOnInit() {

    this.role = sessionStorage.getItem('ROLE');
    if (this.role == "ADMIN") {
      this._router.navigate(["/Admin"])
    } else {
      this._router.navigate(["/Accueil"])
    }
  }
}


