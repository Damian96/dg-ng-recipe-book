import { Component } from '@angular/core';
import { RecipesService } from "src/app/recipes.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  constructor(public recipeService: RecipesService) {
  }
}
