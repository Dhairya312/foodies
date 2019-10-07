import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
   }

  getIngredient(index: number) {
    return this.ingredients[index];
   }

  addIngredient(newingredient: Ingredient) {
    //     let ingname = this.ingredients;
    //     let ingnewname  = [newingredient];
    // console.log(ingname);
    // console.log(ingnewname);
    // debugger
    //     if(ingname !== ingnewname){
    //       alert('save');
    //       debugger
    //     } else {
    //       alert('sorry');
    //       debugger
    //     }
     this.ingredients.push(newingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
   }

   addIngredients(ingredients: Ingredient[]) {
    //  for (let ingredient of ingredients) {
    //     this.addIngredient(ingredient);
    //    }
    //  }
    
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
   }

   updateIngredient(index: number, newIngredient: Ingredient) {
     this.ingredients[index] = newIngredient;
     this.ingredientsChanged.next(this.ingredients.slice());
   }

   deleteIngredient(index: number) {
     this.ingredients.splice(index, 1);
     this.ingredientsChanged.next(this.ingredients.slice());
   }
}
