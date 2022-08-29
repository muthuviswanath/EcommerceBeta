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
  onIncrementCartItem(productItem): void {
    productItem.quantity++;
    if (productItem.quantity > productItem.product.quantity)
      productItem.quantity = productItem.product.quantity;
    this.editCart(productItem);
  }
  onDecrementCartItem(productItem): void {
    productItem.quantity--;
    if (productItem.quantity < 1) productItem.quantity = 1;
    this.editCart(productItem);
  }
  onRemoveCartItem(): void {
    this.shoppingCartService
      .deleteProductsFromShoppingCart(this.product.cartId)
      .subscribe(() => {
        window.location.reload();
      });
  }
  editCart(productItem) {
    const cartData = {
      cartid: productItem.cartId,
      userid: productItem.userId,
      Productid: productItem.product.productid,
      carttotal: 0,
      quantity: productItem.quantity,
    };
    this.shoppingCartService
      .editShoppingCartProduct(productItem.cartId, cartData)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
