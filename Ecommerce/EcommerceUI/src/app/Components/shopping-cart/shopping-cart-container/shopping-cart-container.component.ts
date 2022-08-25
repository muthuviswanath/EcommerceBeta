import { Component, OnInit } from '@angular/core';
import { IShoppingCart } from 'src/app/Interface/IShoppingCart';
import { ShoppingCartService } from 'src/app/Services/shoppingcart/shopping-cart.service';
import { ShoppingCartItemComponent } from 'src/app/Components/shopping-cart/shopping-cart-item/shopping-cart-item.component';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.css'],
})
export class ShoppingCartContainerComponent implements OnInit {
  ngOnInit(): void {}
}
