import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {

@Input() cat: any;


  constructor() { }

  ngOnInit() {
  }

}
