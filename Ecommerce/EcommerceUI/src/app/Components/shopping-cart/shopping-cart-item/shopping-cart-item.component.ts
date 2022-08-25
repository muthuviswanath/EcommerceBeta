import { Component, Input, OnInit } from '@angular/core';
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
    this.shoppingCartService
      .deleteProductsFromShoppingCart(this.product.cartid)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
