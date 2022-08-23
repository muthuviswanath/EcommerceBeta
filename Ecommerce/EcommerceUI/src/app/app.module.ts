import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { ProductsComponent } from './Components/Products/products.component';
import { ProductService } from './Services/products/product.service';
import { ShoppingCartService } from './Services/shoppingcart/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatCardModule],
  providers: [ProductService, WishlistService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}