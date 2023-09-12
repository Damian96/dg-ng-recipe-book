import { Component } from '@angular/core';
import { RecipesService } from "src/app/recipes/recipes.service";
import { Recipe } from "src/app/shared/models/recipe";

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent {

  newRecipe: Recipe = new Recipe();
  isFormSubmitted: boolean = false;
  formValidity: boolean | null = null;

  constructor(private recipeService: RecipesService) { }

  onSubmit(): void {
    this.isFormSubmitted = true;

    if (!this.validateForm()) {
      this.formValidity = false;
      return;
    }

    this.recipeService.addRecipe(this.newRecipe);
  }

  validateForm(): boolean {
    if (this.newRecipe.title.length <= 3) return false;

    if (this.newRecipe.desc.length <= 10) return false;

    if (this.newRecipe.timeToComplete <= 5) return false;

    this.formValidity = true;
    return true;
  }

  resetForm() : void {
    this.newRecipe = new Recipe();
    this.formValidity = null;
    this.isFormSubmitted = false;
  }
}
