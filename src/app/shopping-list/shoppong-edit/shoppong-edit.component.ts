import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shoppong-edit.component.html',
  styleUrls: ['./shoppong-edit.component.css']
})
export class ShoppongEditComponent implements OnInit {
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppinService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const value = form.value;

    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppinService.addIngredient(newIngredient);
  }

}
