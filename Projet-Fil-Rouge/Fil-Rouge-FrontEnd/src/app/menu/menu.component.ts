import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDropdown, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../service/data.service';
import { ProduitService } from '../service/produit.service';
import { LoginService } from '../service/login.service';
import { isNullOrUndefined } from 'util';
import { isContentQueryHost } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[NgbDropdownConfig]
})
export class MenuComponent implements OnInit {

  nom: string = ""
  isConnected:boolean

  constructor(config: NgbDropdownConfig, private _produitService : ProduitService, private _loginService: LoginService, private router: Router) {
    config.placement = "bottom-right";
    config.autoClose = true;
   }

  ngOnInit() {

    this._loginService.loggedInUser().subscribe(
      value =>{
       // console.log("Utilisateur connecté : " + isNullOrUndefined(value) ? null : value.mail);
       console.log("***")
        isNullOrUndefined(value) ? this.isConnected = false : this.isConnected = true
      }
    );
  }
  search(pageActuelle:number) {
    
    this._produitService.usualSearch(pageActuelle, this.nom, "", "", 10);
  }

  goToLoginPage(){
    this.router.navigate(['/Login'])
  }

}
