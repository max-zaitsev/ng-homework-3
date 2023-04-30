import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../../shared/services/cart.service";
import {PositionsService} from "../../../../shared/services/positions.service";
import {CartItem} from "../../../../shared/models/CartItem";
import {CurrenciesService} from "../../../../shared/services/currencies.service";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public positionsService: PositionsService,
    public currenciesService: CurrenciesService) { }

  ngOnInit(): void {
  }

  onItemDelete(cartItem: CartItem): void {
    this.cartService.delCartItem(cartItem);
  }

  onItemQuantityChange($event: CartItem) {
    this.cartService.changeCartItem($event);
  }
}
