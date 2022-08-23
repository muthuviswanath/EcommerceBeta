import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import {MatCardModule}from '@angular/material/card';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
