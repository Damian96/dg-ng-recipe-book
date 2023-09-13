import { Injectable } from '@angular/core';
import { Recipe, mockRecipes } from "../shared/models/recipe";
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

  getAllRecipes(): Array<Recipe> {
    return this.recipes.slice(); // Return a copy of the recipes array to prevent direct modification.
  }

  /* Read & Write to LocalStorage */
  private loadRecipesFromLocalStorage(): void {
    const recipesData = store.get(this.#storageKey);

    if (recipesData) {
      this.recipes = JSON.parse(recipesData).map((data: { id: number, title: string, desc: string, timeToComplete: number }) => new Recipe(data.id, data.title, data.desc, data.timeToComplete));
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
    this.saveRecipesToLocalStorage();
  }

  deleteRecipe(id: number): void {
    const index = this.recipes.findIndex(recipe => recipe.id === id);

    if (index !== -1) {
      this.recipes.splice(index, 1);
    }
    this.saveRecipesToLocalStorage();
  }

  private generateUniqueId(): number {
    const existingIds = this.recipes.map(recipe => recipe.id);
    const newId = Math.max(...existingIds, 0) + 1;
    return newId;
  }

  generateDummyRecipes(): void {
    store.set('recipeBook', JSON.stringify(mockRecipes));
  }
}
