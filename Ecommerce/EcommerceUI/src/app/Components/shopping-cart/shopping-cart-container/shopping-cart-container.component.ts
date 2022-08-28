import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.css'],
})
export class ShoppingCartContainerComponent implements OnInit {
  cart: any;
  checkoutData: any = {};
  totalPrice = 0;
  userId = 3; //Substitute this value from session user id
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingCartService
      .getAllShoppingCartProductOfUser(this.userId)
      .subscribe((res) => {
        this.cart = res;
        for (let i = 0; i < this.cart.length; i++)
          this.sumAllProductPrice(this.cart[i]);
      });
  }
  sumAllProductPrice(cartProduct: any) {
    this.totalPrice += cartProduct.product.price * cartProduct.quantity;
  }
  checkOut() {
    for (let i = 0; i < this.cart.length; i++) {
      this.checkoutData.userid = this.cart[i].userId;
      this.checkoutData.productid = this.cart[i].product.productid;
      // this.checkoutData.orderdate = Date();
      this.checkoutData.totalPrice =
        this.cart[i].quantity * this.cart[i].product.price;
      this.shoppingCartService
        .checkoutShoppingCartProducts(this.checkoutData)
        .subscribe(() => {
          this.cart[i].product.quantity =
            this.cart[i].product.quantity - this.cart[i].quantity;
          this.shoppingCartService
            .editShoppingCartProduct(
              this.checkoutData.productid,
              this.cart[i].product
            )
            .subscribe();
          for (let i = 0; i < this.cart.length; i++) {
            this.shoppingCartService
              .deleteProductsFromShoppingCart(this.cart[i].cartId)
              .subscribe(() => {
                window.location.reload();
              });
          }
        });
    }
  }
}
