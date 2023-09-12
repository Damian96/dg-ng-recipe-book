import { Injectable } from '@angular/core';
import { Recipe } from "./shared/models/recipe";
import * as store from 'store';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Array<Recipe> = [];
  #storageKey: string = 'recipeBook';

  constructor() {
    this.loadRecipesFromLocalStorage();
  }

  getAllRecipes(): Recipe[] {
    return this.recipes.slice(); // Return a copy of the recipes array to prevent direct modification.
  }

  /* Read & Write to LocalStorage */
  private loadRecipesFromLocalStorage(): void {
    const recipesData = store.get(this.#storageKey);

    if (recipesData) {
      this.recipes = JSON.parse(recipesData);
    }
  }

  private saveRecipesToLocalStorage(): void {
    store.set(this.#storageKey, JSON.stringify(this.recipes));
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  /* CRUD */
  addRecipe(recipe: Recipe): void {
    recipe.id = this.generateUniqueId();

    this.recipes.push(recipe);
    this.saveRecipesToLocalStorage();
  }

  updateRecipe(updatedRecipe: Recipe): void {
    const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id);

    if (index !== -1) {
      this.recipes[index] = { ...updatedRecipe };
    }
  }

  deleteRecipe(id: number): void {
    const index = this.recipes.findIndex(recipe => recipe.id === id);

    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
  }

  private generateUniqueId(): number {
    const existingIds = this.recipes.map(recipe => recipe.id);
    const newId = Math.max(...existingIds, 0) + 1;
    return newId;
  }
}
