import { IProducts } from 'src/app/Interface/IProducts';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { IShoppingCart } from 'src/app/Interface/IShoppingCart';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:5000/api/';
  getAllProductsFromShopppingCart(): Observable<IShoppingCart[]> {
    return this.http.get<IShoppingCart[]>(this.baseUrl + 'Carts');
  }
  getProductsById(prodId: number): Observable<IProducts> {
    return this.http.get<IProducts>(this.baseUrl + 'Products/' + prodId);
  }
  getAllProductsOfUser(userId: number) {
    return this.http.get(this.baseUrl + 'Users/' + userId);
  }
  deleteProductsFromShoppingCart(cartId: number) {
    return this.http.delete(this.baseUrl + 'Carts/' + cartId);
  }
}
