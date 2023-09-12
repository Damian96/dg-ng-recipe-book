import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeAddComponent } from "./recipes/recipe-add/recipe-add.component";

const routes: Routes = [
  { path: '', component: RecipeListComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'add-recipe', component: RecipeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
