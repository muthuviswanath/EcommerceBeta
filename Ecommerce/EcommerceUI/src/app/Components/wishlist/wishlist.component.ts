import { IWishlist } from '../../Interface/IWishlist';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  wishlist?: IWishlist[];
  constructor(private wishlistservice: WishlistService) {}

  ngOnInit(): void {
    this.wishlistservice
      .getAllProductsFromWishlist()
      .subscribe((res) => (this.wishlist = res));
  }
}
