import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent implements OnInit {
  @Input('product') product: any;
  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {}
  onRemoveCartItem() {
    this.wishlistService
      .deleteProductsFromWishlist(this.product.wishlistid)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
