export class Recipe implements RecipeInterface {
  id: number;
  title: string;
  desc: string;
  timeToComplete: number;

  constructor(id: number = 0, title?: string, desc?: string, timeToComplete?: number) {
    if (id != 0)
      this.id = id;
    else
      this.id = Math.floor(Math.random() * 100);

    if (title)
      this.title = title;
    else
      this.title = '';

    if (desc)
      this.desc = desc;
    else
      this.desc = '';

    if (timeToComplete)
      this.timeToComplete = timeToComplete;
  }
}

export interface RecipeInterface {
  id: number;
  title: string;
  desc: string;
  timeToComplete: number;
}

export const mockRecipes: Array<Recipe> = [
  new Recipe(1, "Spaghetti Carbonara", "A classic Italian pasta dish with eggs, cheese, and pancetta.", 30),
  new Recipe(2, "Chicken Stir-Fry", "A quick and easy stir-fry with chicken and mixed vegetables.", 20),
  new Recipe(3, "Chocolate Chip Cookies", "Homemade chocolate chip cookies with a soft and chewy texture.", 45)
];
