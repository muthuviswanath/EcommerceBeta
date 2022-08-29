import { ShoppingCartItemComponent } from './Components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { ProductsComponent } from './Components/Products/products.component';
import { ProductService } from './Services/products/product.service';
import { ShoppingCartService } from './Services/shoppingcart/shopping-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { UserService } from './Services/user/user.service';
import { SignupService } from './Services/signup/signup.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

import { ShoppingCartContainerComponent } from './Components/shopping-cart/shopping-cart-container/shopping-cart-container.component';
import { WishlistContainerComponent } from './Components/wishlist/wishlist-container/wishlist-container.component';
import { WishlistItemComponent } from './Components/wishlist/wishlist-item/wishlist-item.component';
import { Filter } from './Filter';
import {sort} from './sort'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ShoppingCartContainerComponent,
    ShoppingCartItemComponent,
    WishlistContainerComponent,
    WishlistItemComponent,
    SearchComponent,
    Filter,
    sort
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    WishlistService,
    ShoppingCartService,
    SearchComponent,
    UserService,
    SignupService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
