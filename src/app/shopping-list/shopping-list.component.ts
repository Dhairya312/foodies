import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit() {
    // const myNumber = interval(1000);
    // myNumber.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
