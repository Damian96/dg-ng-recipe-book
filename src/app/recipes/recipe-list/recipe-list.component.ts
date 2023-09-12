import { Component } from '@angular/core';
import { RecipesService } from "src/app/recipes/recipes.service";
import { Recipe } from "src/app/shared/models/recipe";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  recipes: Array<Recipe>;

  constructor(private ref: ChangeDetectorRef, public recipeService: RecipesService) {
    this.recipes = this.recipeService.getAllRecipes();
  }

  deleteRecipe(id: number): void {
    this.recipeService.deleteRecipe(id);
    this.recipes = this.recipeService.getAllRecipes();
    this.ref.detectChanges();
  }

}
