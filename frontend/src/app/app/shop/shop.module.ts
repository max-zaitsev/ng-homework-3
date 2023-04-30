import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {TuiBadgeModule, TuiComboBoxModule, TuiDataListWrapperModule, TuiInputModule} from '@taiga-ui/kit';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {HttpClientModule} from '@angular/common/http';
import {IPositionsApiServiceToken} from '../../../shared/interfaces/IPositionsApiService';
import {PositionsApiService} from '../../../shared/services/positionsApi.service';
import {TuiLetModule} from '@taiga-ui/cdk';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import {CartModule} from "./cart/cart.module";
import {CatalogModule} from "./catalog/catalog.module";

@NgModule({
  declarations: [
    ShopComponent,
    ShopHeaderComponent,
  ],
  exports: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    HttpClientModule,
    TuiComboBoxModule,
    TuiLetModule,
    TuiDataListWrapperModule,
    CartModule,
    CatalogModule
  ],
  providers: [
    {provide: IPositionsApiServiceToken, useClass: PositionsApiService}
  ]
})
export class ShopModule {
}
