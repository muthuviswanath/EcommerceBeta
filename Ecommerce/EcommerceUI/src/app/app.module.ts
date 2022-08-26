import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [ProductService, WishlistService, ShoppingCartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
