import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { ShoppingCartContainerComponent } from './Components/shopping-cart/shopping-cart-container/shopping-cart-container.component';
import { WishlistContainerComponent } from './Components/wishlist/wishlist-container/wishlist-container.component';
import { ProductsComponent } from './Components/Products/products.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'shoppingcart', component: ShoppingCartContainerComponent },
  { path: 'wishlist', component: WishlistContainerComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path:'signup',component:SignupComponent},
   {path:'product/:id',component:ProductsComponent},
  {path:'product-detail/:id',component:ProductDetailsComponent},
  {path:'products',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
