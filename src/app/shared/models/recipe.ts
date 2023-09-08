export class Recipe {
  id: number;
  title: string;
  desc: string;
  timeToComplete: number;

  constructor(title: string, desc: string, timeToComplete: number) {
    this.id = Math.floor(Math.random() * 100);
    this.title = title;
    this.desc = desc;
    this.timeToComplete = timeToComplete;
  }
}

export const recipe1 = new Recipe("Spaghetti Carbonara", "A classic Italian pasta dish with eggs, cheese, and pancetta.", 30);
export const recipe2 = new Recipe("Chicken Stir-Fry", "A quick and easy stir-fry with chicken and mixed vegetables.", 20);
export const recipe3 = new Recipe("Chocolate Chip Cookies", "Homemade chocolate chip cookies with a soft and chewy texture.", 45);
