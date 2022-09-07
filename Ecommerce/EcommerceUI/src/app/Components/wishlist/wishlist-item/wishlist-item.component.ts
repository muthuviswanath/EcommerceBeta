import { Router } from '@angular/router';
import { ShoppingCartService } from './../../../Services/shoppingcart/shopping-cart.service';
import { ProductService } from 'src/app/Services/products/product.service';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent implements OnInit {
  @Input() product: any;
  model: any;
  shoppingCartList: any;
  constructor(
    private wishlistService: WishlistService,
    private productService: ProductService,
    private shoppingcartservice: ShoppingCartService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  onRemoveCartItem() {
    this.wishlistService
      .deleteProductsFromWishlist(this.product.wishlistId)
      .subscribe(() => {
        window.location.reload();
      });
  }
  addToCart() {
    const cartData = {
      userid: this.product.userId,
      Productid: this.product.product.productid,
      carttotal: 0,
      quantity: 1,
    };
    this.shoppingcartservice
      .getAllShoppingCartProductOfUser(cartData.userid)
      .subscribe((res) => {
        this.shoppingCartList = res;
        let flag = 0;
        for (let i = 0; i < this.shoppingCartList.length; i++) {
          if (
            cartData.Productid == this.shoppingCartList[i].product.productid
          ) {
            flag = 1;
            alert('This product is already added in your shopping cart.');
            break;
          }
        }
        if (flag == 0)
          this.productService.addCart(cartData).subscribe(() => {
            alert('Added to cart');
          });
        this.wishlistService
          .deleteProductsFromWishlist(this.product.wishlistId)
          .subscribe(() => {
            window.location.reload();
          });
      });
    // this.productService.addCart(cartData).subscribe(() => {
    //   this.wishlistService
    //     .deleteProductsFromWishlist(this.product.wishlistId)
    //     .subscribe(() => {
    //       console.log('Product added to cart');
    //       window.location.reload();
    //     });
    // });
  }
}
