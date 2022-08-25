import { IProducts } from './../../../Interface/IProducts';
import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/Interface/IShoppingCart';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';
import { ShoppingCartItemComponent } from 'src/app/Components/shopping-cart/shopping-cart-item/shopping-cart-item.component';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.css'],
})
export class ShoppingCartContainerComponent implements OnInit {
  cart_all_data: any;
  cart: any;
  totalPrice = 0;
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingCartService.getAllProductsOfUser(1).subscribe((res) => {
      this.cart_all_data = res;
      this.cart = this.cart_all_data.carts.$values;

      for (let i = 0; i < this.cart.length; i++)
        this.sumAllProductPrice(this.cart[i].product.price);
    });
  }
  sumAllProductPrice(price: number) {
    this.totalPrice += price;
  }
}
