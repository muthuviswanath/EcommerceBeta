import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/Products/products.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
