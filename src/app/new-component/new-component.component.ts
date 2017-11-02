import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  custom = {
    titolo: 'Titolo componente',
    sottotitolo: 'Sottotitolo componente'
  }
  constructor() { }

  ngOnInit() {
  }

}
