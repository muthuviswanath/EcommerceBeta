import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor(private shoppingcartservice: ShoppingCartService) {}
  quantity: number;
  userId: any;
  shoppingCartList: any;

  ngOnInit(): void {
    this.userId = +localStorage.getItem('userid');
    this.shoppingcartservice
      .getAllShoppingCartProductOfUser(this.userId)
      .subscribe((res) => {
        this.shoppingCartList = res;
        this.quantity = this.shoppingCartList.length;
      });
  }
}
