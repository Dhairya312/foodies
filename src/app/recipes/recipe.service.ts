import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cake',
      'This is simply a test',
      // tslint:disable-next-line: max-line-length
      'https://www.fergusonplarre.com.au/media/catalog/product/cache/1/image/370x/9df78eab33525d08d6e5fb8d27136e95/c/h/choc-drip-cake_6.jpg',
      [
        new Ingredient('Eggs', 5),
        new Ingredient('water', 5)
      ]),
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
      [
        new Ingredient('Meat', 5),
        new Ingredient('Bun', 2)
      ])
  ];

  constructor(
    private shoppingService: ShoppingService
    ) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
