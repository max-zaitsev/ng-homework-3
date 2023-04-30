import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiFieldErrorPipeModule, TuiFilterByInputPipeModule,
  TuiInputCountModule,
  TuiInputModule
} from "@taiga-ui/kit";
import {TuiButtonModule, TuiDataListModule, TuiErrorModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiLetModule} from "@taiga-ui/cdk";



@NgModule({
    declarations: [
        CartComponent,
        CartItemComponent,
        CartFormComponent
    ],
    exports: [
        CartComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputCountModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiLetModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiInputModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
    TuiFilterByInputPipeModule,
    TuiDataListModule
  ]
})
export class CartModule { }
