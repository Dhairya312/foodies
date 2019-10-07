import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id: number;
  editMode = false;
  customerForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private customerService: CustomerService,
    private fromBuilder: FormBuilder,
    private router: Router) {
      this.gradeForm();
     }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          // tslint:disable-next-line: no-string-literal
          this.id = +params['id'];
          // tslint:disable-next-line: no-string-literal
          this.editMode = params['id'] != null;
          this.gradeForm();
        }
      );
  }
  private gradeForm() {
   let gradeName = '';
   let gradeDescription = '';
   let gradeId = null;
   if(this.editMode) {
     const customer = this.customerService.getCustomer(this.id);
     gradeId = customer.gradeId;
     gradeName = customer.gradeName;
     gradeDescription = customer.gradeDescription;
    //  if(recipe['ingredients']) {
    //    for(let ingredient of recipe.ingredients) {
    //     recipeIngredients.push(
    //       new FormGroup({
    //         'name': new FormControl(ingredient.name, Validators.required),
    //         'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    //       })
    //     );
    //    }
    //  }
   }
    this.customerForm = this.fromBuilder.group({
      gradeId: [gradeId],
      gradeName: [gradeName, Validators.required ],
      gradeDescription: [gradeDescription],
      // imagePath: [recipeImagePath],
      // ingredients: recipeIngredients
      // 'name': new FormControl(recipeName, Validators.required),
      // 'imagePath': new FormControl(recipeImagePath, Validators.required),  
      // 'description': new FormControl(recipeDescription, Validators.required),
      // 'ingredients': recipeIngredients
    });
  }
  onSubmit() {
    // const newRecipe = new Recipe();
    if(this.editMode) {
      this.customerService.updateCustomer(this.id, this.customerForm.value)
    } else {
      this.customerService.addCustomer(this.customerForm.value);
    }
    this.onCancel();
  }

  // getControls() {
  //   return (<FormArray>this.recipeForm.get('ingredients')).controls;
  // }

  // onAddIngredient() {
  //   (<FormArray>this.recipeForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name' : new FormControl('', Validators.required),
  //       'amount': new FormControl('', Validators.required)
  //     })
  //   );
  // }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // onDeleteIngredient(index: number) { 
  //   (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  // }

}
