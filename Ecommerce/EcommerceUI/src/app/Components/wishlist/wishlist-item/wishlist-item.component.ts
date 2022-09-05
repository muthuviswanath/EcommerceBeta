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
  constructor(
    private wishlistService: WishlistService,
    private productService: ProductService
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
    this.productService.addCart(cartData).subscribe(() => {
      this.wishlistService
        .deleteProductsFromWishlist(this.product.wishlistId)
        .subscribe(() => {
          console.log('Product added to cart');
          window.location.reload();
        });
    });
  }
}
