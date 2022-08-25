import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './Components/home/home.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    WishlistComponent,
    CarouselComponent,
    HomeComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    CarouselModule,
    FormsModule,
  ],
  providers: [ProductService, WishlistService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
