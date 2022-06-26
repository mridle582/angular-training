import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of SalesPerson Objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Bob", "Smith", "bob.smith@email.com", 50000),
    new SalesPerson("John", "Doe", "john.doe@email.com", 40000),
    new SalesPerson("Jane", "Smith", "jane.smith@email.com", 60000),
    new SalesPerson("Claire", "Smith", "claire.smith@email.com", 45000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
