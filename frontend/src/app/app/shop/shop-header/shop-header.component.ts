import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.less']
})
export class ShopHeaderComponent {

  @Input()
  cartOpened = false;

  @Output()
  cartOpenedChange = new EventEmitter<boolean>();

  onCatalogClick() {
    this.cartOpened = false;
    this.cartOpenedChange.emit(this.cartOpened);
  }

  onCartClick() {
    this.cartOpened = true;
    this.cartOpenedChange.emit(this.cartOpened);
  }

}
