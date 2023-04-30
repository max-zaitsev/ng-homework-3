import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiInputCountModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {IPositionsApiServiceToken} from "../../../../shared/interfaces/IPositionsApiService";
import {PositionsApiService} from "../../../../shared/services/positionsApi.service";
import {CatalogComponent} from "./catalog.component";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputCountModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiIslandModule
  ],
  exports: [
    CatalogComponent
  ],
})
export class CatalogModule { }
