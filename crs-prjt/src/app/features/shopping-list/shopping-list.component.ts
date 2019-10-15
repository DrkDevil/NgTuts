import { Component, OnInit } from '@angular/core';
import { ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // properties
  ingredients: ingredient[] = [
    // Create a new ingredient by using the constructor from model
    new ingredient('apples', 5 ),
    new ingredient('tomatos', 15 )
  ];


  constructor() { }

  ngOnInit() {
  }

}
