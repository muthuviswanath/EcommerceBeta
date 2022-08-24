import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartContainerComponent } from './Components/shopping-cart/shopping-cart-container/shopping-cart-container.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'shoppingcart', component: ShoppingCartContainerComponent },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
