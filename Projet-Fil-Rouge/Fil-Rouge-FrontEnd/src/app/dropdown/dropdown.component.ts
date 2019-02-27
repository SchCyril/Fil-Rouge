import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent implements OnInit {

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}
