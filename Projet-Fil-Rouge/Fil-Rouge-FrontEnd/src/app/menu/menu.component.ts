import { Component, OnInit } from '@angular/core';
import { NgbDropdown, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[NgbDropdownConfig]
})
export class MenuComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.placement = "bottom-right";
    config.autoClose = true;
   }

  ngOnInit() {
    
  }

}
