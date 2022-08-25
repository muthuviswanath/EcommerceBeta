import { IProducts } from 'src/app/Interface/IProducts';
import { Component, Input, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/Interface/IShoppingCart';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css'],
})
export class ShoppingCartItemComponent implements OnInit {
  @Input('product') product: any;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}
  onIncrementCartItem(): void {
    console.log('Increment');
  }
  onDecrementCartItem(): void {
    console.log('Decrement');
  }
  onRemoveCartItem(): void {
    console.log('Delete');
  }
}
