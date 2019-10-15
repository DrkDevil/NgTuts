import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';

import { ShoppingListComponent } from './features/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './features/shopping-list/shopping-edit/shopping-edit.component';

import { RecipesComponent } from './features/recipes/recipes.component';
import { RecipesListComponent } from './features/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './features/recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailsComponent } from './features/recipes/recipes-details/recipes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // Shoppping Components
    ShoppingListComponent,
    ShoppingEditComponent,
    // Recipes Components
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
