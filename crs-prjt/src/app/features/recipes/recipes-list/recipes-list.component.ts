import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  // Create a type for your array
  recipes: Recipe[]= [
    // Crate a new blueprint based on model (master class-- Model)
    new Recipe('A Test Recipe', 'This is a description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg'),
    new Recipe('A Test Recipe', 'This is a description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
