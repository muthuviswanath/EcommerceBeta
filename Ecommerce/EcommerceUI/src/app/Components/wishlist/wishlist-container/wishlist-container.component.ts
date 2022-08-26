import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist-container',
  templateUrl: './wishlist-container.component.html',
  styleUrls: ['./wishlist-container.component.css'],
})
export class WishlistContainerComponent implements OnInit {
  wishlistAllData: any;
  wishlist: any;
  constructor(private wishlistservice: WishlistService) {}

  ngOnInit(): void {
    this.wishlistservice.getAllWishlistProductsOfUser(4).subscribe((res) => {
      this.wishlistAllData = res;
      this.wishlist = this.wishlistAllData.$values;
      console.log(this.wishlist);
    });
    // this.wishlistservice.getAllWishlistProductsOfUser(4).subscribe((res) => {
    //   this.wishlistAllData = res;
    //   console.log(this.wishlistAllData.wishlists.$values[0]);
    // });
  }
}
