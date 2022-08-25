import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.css'],
})
export class ShoppingCartContainerComponent implements OnInit {
  cartAllData: any;
  cart: any;
  totalPrice = 0;
  userId = 1; //Substitute this value from session user id
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingCartService
      .getAllProductsOfUser(this.userId)
      .subscribe((res) => {
        this.cartAllData = res;
        this.cart = this.cartAllData.carts.$values;
        for (let i = 0; i < this.cart.length; i++)
          this.sumAllProductPrice(this.cart[i].product.price);
      });
  }
  sumAllProductPrice(price: number) {
    this.totalPrice += price;
  }
}
