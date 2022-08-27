import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWishlist } from 'src/app/Interface/IWishlist';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private http: HttpClient) {}
  baseurl: string = 'http://localhost:5000/api/Wishlists/';
  deleteProductsFromWishlist(wishlistId: number) {
    return this.http.delete(this.baseurl + wishlistId);
  }
  getAllWishlistProductsOfUser(userId: number) {
    return this.http.get(this.baseurl + 'User/' + userId);
  }
}
