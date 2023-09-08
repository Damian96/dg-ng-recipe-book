import { Injectable } from '@angular/core';
import { Recipe, recipe1, recipe2, recipe3 } from "./shared/models/recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [];

  constructor() {
    this.recipes = [
      recipe1,
      recipe2,
      recipe3
    ];
  }

  saveRecipe(data: Recipe) {
    this.saveToLocalStorage(data.id.toString(), data);
  }

  getRecipe(id: number) {
    let json = window.localStorage.getItem(id.toString());

    try {
      return JSON.parse(json!);
    } catch (error) {
      console.error('Could not find recipe with id ' + id + '.');
    }
  }

  private saveToLocalStorage(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
}
