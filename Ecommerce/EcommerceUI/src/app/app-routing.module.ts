import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/pages/product-details/product-details.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  {path:'shopping-cart',component:ShoppingCartComponent},
  {path:'product-details',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
