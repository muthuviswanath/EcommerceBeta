import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/Products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  {path:'product-details',component:ProductDetailsComponent},
  { path: 'login', component: LoginComponent },
  { path:'signup',component:SignupComponent},
  { path: 'Products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
