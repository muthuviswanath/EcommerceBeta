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
import { ListProductComponent } from './Components/admin/list-product/list-product.component';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { UpdateProductComponent } from './Components/admin/update-product/update-product.component';




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
    ListProductComponent,
    AddProductComponent,
    UpdateProductComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatCardModule,FormsModule,ReactiveFormsModule],
  providers: [ProductService, WishlistService, ShoppingCartService,UserService,SignupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
