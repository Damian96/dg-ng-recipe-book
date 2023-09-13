import { Component } from '@angular/core';
import { RecipesService } from "./recipes/recipes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe-book';

  constructor(private recipeService: RecipesService) { }

  generateDummyRecipes() {
    this.recipeService.generateDummyRecipes();
    window.location.reload();
  }
}
