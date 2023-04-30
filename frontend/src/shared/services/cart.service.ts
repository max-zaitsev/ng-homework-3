import {Injectable, OnInit} from "@angular/core";
import {CartItem} from "../models/CartItem";
import {Position} from "../models/Position";
import {PositionsService} from "./positions.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private positionsService: PositionsService) {
  }

  private _cartItems: CartItem[] = [];
  private _summary = 0;


  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  get summary(): number {
    return this._summary;
  }

  changeCartItem(cartItem: CartItem): void {
    const index = this._cartItems.findIndex(item => item.positionId === cartItem.positionId)
    if (index === undefined) throw new Error('No cart item with this positionId')
    this._cartItems[index] = cartItem;
    this.updateSummary();
  }
  addCartItem(cartItem: CartItem): void {
    const some = this._cartItems.some(item => item.positionId === cartItem.positionId);
    if (some) {
      this.changeCartItem(cartItem);
      return;
    }
    this._cartItems.push(cartItem);
    this.updateSummary();
  }

  delCartItem(cartItem: CartItem): void {
    this._cartItems = this._cartItems.filter(
      p => p.positionId !== cartItem.positionId);
    this.updateSummary();
  }

  private updateSummary(): void {
    this._summary = this._cartItems.reduce(
      (sum, c) => {
        const position = this.positionsService.getPositionById(c.positionId);
        if (!position) {
          return sum;
        }
        return (position.price * c.quantity) + sum
      }, 0);
  }
}
