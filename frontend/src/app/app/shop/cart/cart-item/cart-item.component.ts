import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Position} from "../../../../../shared/models/Position";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartItem} from "../../../../../shared/models/CartItem";
import {Subscription} from "rxjs";
import {CurrenciesService} from "../../../../../shared/services/currencies.service";

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit, OnDestroy{

  constructor(public currenciesService: CurrenciesService) {

  }

  @Input()
  cartItem!: CartItem;
  @Input()
  position!: Position;

  @Output()
  deleteItem = new EventEmitter<CartItem>();
  @Output()
  changeQuantity = new EventEmitter<CartItem>();

  private quantityChangedSubscription!: Subscription;

  cartForm = new FormGroup({
    quantityInput:  new FormControl(1, [Validators.required, Validators.min(1)])
  });

  onItemDelete(): void {
    this.deleteItem.emit(this.cartItem);
  }

  ngOnInit(): void {
    this.cartForm.setValue({quantityInput: this.cartItem.quantity});
    this.quantityChangedSubscription = this.cartForm.valueChanges.subscribe(value => {
      const emitObj = {
        positionId: this.cartItem.positionId,
        quantity: value.quantityInput
      }
      this.changeQuantity.emit(emitObj);
    });
  }


  ngOnDestroy() {
    this.quantityChangedSubscription.unsubscribe();
  }


}
