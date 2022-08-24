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
  getAllProductsFromWishlist(): Observable<IWishlist[]> {
    return this.http.get<IWishlist[]>(this.baseurl + 'api/wishlists');
  }
}
