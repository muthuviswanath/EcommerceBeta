import { IProducts } from 'src/app/Interface/IProducts';
import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/Interface/IShoppingCart';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css'],
})
export class ShoppingCartItemComponent implements OnInit {
  shoppingCartList?: any;
  productList?: IProducts;
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartService
      .getAllProductsFromShopppingCart()
      .subscribe((res) => {
        this.shoppingCartList = res;
        this.shoppingCartService
          .getProductsById(this.shoppingCartList.$values[0].cartid)
          .subscribe((res) => {
            this.productList = res;
          });
      });

    ///
  }
}
