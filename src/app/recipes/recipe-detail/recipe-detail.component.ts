import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "src/app/recipes.service";
import { Recipe } from "src/app/shared/models/recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  selectedId: number;
  recipe: Recipe;

  constructor(private recipeService: RecipesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = Number(params.get('id'));
      this.recipe = this.recipeService.getRecipe(this.selectedId);
    });
  }
}
