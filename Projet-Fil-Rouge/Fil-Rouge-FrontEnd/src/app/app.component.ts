import { Component, OnInit } from '@angular/core';
import { Utilisateur } from './model';
import { PanierService } from './service/panier.service';
import { LoginService } from './service/login.service';
import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  role: string;
  title = 'Fil-Rouge-Front';

  constructor(){}
  
  ngOnInit() {
    this.role = sessionStorage.getItem('ROLE');
  }

}


