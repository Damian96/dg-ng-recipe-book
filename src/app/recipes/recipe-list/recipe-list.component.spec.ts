import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import { Recipe, mockRecipes as mockRecipesData } from "src/app/shared/models/recipe";
import { RecipesService } from "../recipes.service";

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;
  let recipesService: RecipesService;

  const mockRecipes: Array<Recipe> = mockRecipesData;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeListComponent],
      providers: [RecipesService]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(RecipesService);
  });

  it('should load recipes', () => {
    spyOn(recipesService, 'getAllRecipes').and.returnValue(mockRecipes);
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    recipesService = TestBed.inject(RecipesService);

    expect(component.recipes).toEqual(mockRecipes);
  });

});
