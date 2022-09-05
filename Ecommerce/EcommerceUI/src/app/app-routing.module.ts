import { NgModule } from '@angular/core';
import { AddProductComponent } from './Components/admin/add-product/add-product.component';
import { ListProductComponent } from './Components/admin/list-product/list-product.component';
import { LoginComponent } from './Components/pages/login/login.component';
import { SignupComponent } from './Components/pages/signup/signup.component';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { ShoppingCartContainerComponent } from './Components/shopping-cart/shopping-cart-container/shopping-cart-container.component';
import { WishlistContainerComponent } from './Components/wishlist/wishlist-container/wishlist-container.component';
import { ProductsComponent } from './Components/Products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './Components/admin/update-product/update-product.component';
import { AuthGuard } from './guards/auth.guard';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

import { OrderHistoryComponent } from './Components/admin/order-history/order-history.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'shoppingcart',
    component: ShoppingCartContainerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'wishlist',
    component: WishlistContainerComponent,
    canActivate: [AuthGuard],
  },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  {path:'update-product/:id',component:UpdateProductComponent},
  { path: 'update-profile', component:UpdateProfileComponent },
 
  ,
  {path:'order-history',component:OrderHistoryComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
