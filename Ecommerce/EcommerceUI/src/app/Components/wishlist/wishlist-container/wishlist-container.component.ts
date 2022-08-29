import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist-container',
  templateUrl: './wishlist-container.component.html',
  styleUrls: ['./wishlist-container.component.css'],
})
export class WishlistContainerComponent implements OnInit {
  wishlist: any;
  constructor(private wishlistservice: WishlistService) {}
  userid: number;
  ngOnInit(): void {
    this.userid = +localStorage.getItem('userid');
    this.wishlistservice
      .getAllWishlistProductsOfUser(this.userid)
      .subscribe((res) => {
        this.wishlist = res;
      });
  }
}
