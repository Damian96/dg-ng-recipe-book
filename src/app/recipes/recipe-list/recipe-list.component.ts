import { Component } from '@angular/core';
import { RecipesService } from "src/app/recipes.service";
import { Recipe } from "src/app/shared/models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Array<Recipe>;

  constructor(public recipeService: RecipesService) {
    this.recipes = recipeService.getAllRecipes();
  }
}
