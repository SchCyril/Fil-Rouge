import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig, private router: Router, private _loginService: LoginService) {
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }


  deconnect() {
    this._loginService.deconnect().subscribe(
      value => this.router.navigate(['/Accueil'])
    );
  }
}
