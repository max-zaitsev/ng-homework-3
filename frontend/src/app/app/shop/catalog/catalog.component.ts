import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {IPositionsApiService, IPositionsApiServiceToken} from "../../../../shared/interfaces/IPositionsApiService";
import {Position} from "../../../../shared/models/Position";
import {CartItem} from "../../../../shared/models/CartItem";
import {PositionsService} from "../../../../shared/services/positions.service";
import {CartService} from "../../../../shared/services/cart.service";
import {TUI_VALIDATION_ERRORS} from "@taiga-ui/kit";
import {CustomValidators} from "../../../../shared/CustomValidators";

@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less'],
})
export class CatalogComponent implements OnInit {
  positionsArr: Position[] = [];

  constructor(
    public positionsService: PositionsService,
    public cartService: CartService) {
  }

  ngOnInit() {
    this.positionsService.positions$.subscribe(positions => {
      this.positionsArr = Array.from(positions.values());
    });
  }

  onItemAdd(cartItem: CartItem): void {
    this.cartService.addCartItem(cartItem);
  }
}
