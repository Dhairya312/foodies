import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shoppong-edit.component.html',
  styleUrls: ['./shoppong-edit.component.css']
})
export class ShoppongEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppinService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinService.addIngredient(newIngredient);
  }

}
