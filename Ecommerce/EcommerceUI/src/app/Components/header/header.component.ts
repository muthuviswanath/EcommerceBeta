import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor(
    private shoppingcartservice: ShoppingCartService,
    private jwtHelper: JwtHelperService
  ) {}
  quantity: number;
  userId: number;
  shoppingCartList: any;
  ngOnInit(): void {
    this.userId = +localStorage.getItem('userid');
    if (this.userId != 0)
      this.shoppingcartservice
        .getAllShoppingCartProductOfUser(this.userId)
        .subscribe((res) => {
          this.shoppingCartList = res;
          this.quantity = this.shoppingCartList.length;
        });
  }
  isUserAuthenticated() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token) && this.userId) {
      return true;
    }
    return false;
  }
  logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userid');
  }
}
