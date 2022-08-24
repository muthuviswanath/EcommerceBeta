import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IShoppingCart } from 'src/app/Components/shopping-cart/IShoppingCart';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient) {}
  baseurl: string = 'http://localhost:5000/';
  getAllProductsFromShopppingCart(): Observable<IShoppingCart[]> {
    return this.http.get<IShoppingCart[]>(this.baseurl + 'api/carts');
  }
}
