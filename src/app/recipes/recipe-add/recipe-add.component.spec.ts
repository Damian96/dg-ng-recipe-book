import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeAddComponent } from './recipe-add.component';
import { RecipesService } from "../recipes.service";
import { FormsModule } from "@angular/forms";

describe('RecipeAddComponent', () => {
  let component: RecipeAddComponent;
  let fixture: ComponentFixture<RecipeAddComponent>;
  let recipeService: RecipesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeAddComponent],
      providers: [RecipesService],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeAddComponent);
    component = fixture.componentInstance;
    recipeService = TestBed.inject(RecipesService);
    fixture.detectChanges();
  });

  it('should handle all invalid input', () => {
    component.newRecipe.title = '1';
    component.newRecipe.desc = 'error';
    component.newRecipe.timeToComplete = 3;
    component.validateForm();

    expect(component.formValidity).toBeNull();
  });

  it('should create a new Recipe when provided with correct input', () => {
    component.newRecipe.title = 'A dummy Title (Jest)';
    component.newRecipe.desc = 'A dummy Description (Jest)';
    component.newRecipe.timeToComplete = 45;
    component.validateForm();

    fixture.detectChanges();

    expect(component.formValidity).toBeTrue();

    const nativeElement: HTMLElement = fixture.nativeElement;
    const heading = nativeElement.querySelector('#success-heading')!;
    expect(heading.textContent).toContain('Congratulations');
  });

});
