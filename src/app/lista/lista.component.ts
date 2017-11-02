import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mylist',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  mylist = [
    {name: 'Nick',surname:'Smith',telephone:2223311},
    {name: 'Unkown',surname:'Red',telephone:3412313},
    {name: 'Unkown',surname:'Wine',telephone:5532353},
    {name: 'Peter',surname:'Burger',telephone:7667460}
  ];
  constructor() { }

  ngOnInit() {
  }

}
