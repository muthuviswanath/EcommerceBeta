import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(private http: HttpClient) {}
  baseUrl: string = 'http://localhost:5000/api/';
  deleteProductsFromShoppingCart(cartId: number) {
    return this.http.delete(this.baseUrl + 'Carts/' + cartId);
  }

  getAllShoppingCartProductOfUser(userID: number) {
    return this.http.get(this.baseUrl + 'Carts/User/' + userID);
  }

  editShoppingCartProduct(cartId: number, data: any) {
    return this.http.put(this.baseUrl + 'Carts/' + cartId, data);
  }
  checkoutShoppingCartProducts(cartData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    return this.http.post(this.baseUrl + 'Orders', cartData, httpOptions);
  }
  editProductData(productId: any, data: any) {
    return this.http.put(this.baseUrl + 'Products/' + productId, data);
  }
}
