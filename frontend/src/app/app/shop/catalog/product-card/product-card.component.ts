import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Position} from "../../../../../shared/models/Position";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {tuiButtonOptionsProvider} from "@taiga-ui/core";
import {CartItem} from "../../../../../shared/models/CartItem";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
  providers: [
    tuiButtonOptionsProvider({
      size: 's',
    }),
  ],
})
export class ProductCardComponent {

  @Input()
  position!: Position;

  @Output()
  addToCart = new EventEmitter<CartItem>();

  cardForm = new FormGroup({
    quantityInput:  new FormControl(1, [Validators.required, Validators.min(1)])
  });

  onAddToCart(): void {
    this.addToCart.emit({
      positionId: this.position.id,
      quantity: this.cardForm.value.quantityInput});
    this.cardForm.setValue({quantityInput: 1})
  }
}
