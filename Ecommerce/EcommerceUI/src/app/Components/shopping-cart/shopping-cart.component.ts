import { IShoppingCart } from 'src/app/Components/shopping-cart/IShoppingCart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  shoppingCartList?: IShoppingCart[];
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingCartService
      .getAllProductsFromShopppingCart()
      .subscribe((res) => (this.shoppingCartList = res));
  }
}
