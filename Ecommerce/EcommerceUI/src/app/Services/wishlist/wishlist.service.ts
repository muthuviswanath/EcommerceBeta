import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWishlist } from 'src/app/Interface/IWishlist';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}
  baseurl: string = 'http://localhost:5000/';
  getAllProductsFromWishlist() {
    return this.http.get(this.baseurl + 'api/Wishlists');
  }
  // getAllWishlistProductsOfUser(userId: number) {
  //   return this.http.get(this.baseurl + 'api/Users/' + userId);
  // }
  //baseurl/api/wishlists/user/2
  getAllWishlistProductsOfUser(userId: number) {
    return this.http.get(this.baseurl + 'api/Wishlists/User/' + userId);
  }
  deleteProductsFromWishlist(wishlistId: number) {
    return this.http.delete(this.baseurl + 'api/Wishlists/' + wishlistId);
  }
}
