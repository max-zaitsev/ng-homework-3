import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.less']
})
export class ShopComponent implements OnInit {
  cartOpened = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onCartOpenedChange(isOpened: boolean): void {
    this.cartOpened = isOpened;
  }
}
