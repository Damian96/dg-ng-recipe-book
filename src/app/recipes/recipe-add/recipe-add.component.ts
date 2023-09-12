import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RecipesService } from "src/app/recipes.service";
import { Recipe } from "src/app/shared/models/recipe";

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {

  newRecipe: Recipe = new Recipe();
  isFormSubmitted = false;

  constructor(private recipeService: RecipesService) { }

  onSubmit(): void {
    this.isFormSubmitted = true;

    alert('Your recipe has been saved!');

    this.recipeService.addRecipe(this.newRecipe);
  }

  resetForm() {
    // Reset the form after successful submission
    this.newRecipe = new Recipe();
  }
}
