import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , loadChildren : ()=>import('./components/products-catalog/catalog.module').then(m => m.CatalogModule)},
  {path : 'shoppingCart' , loadChildren : ()=>import('./components/shopping-cart/shopping.module').then(m => m.ShoppingModule)},
  {path : 'productDetails/:id' , loadChildren : ()=>import('./components/product-details/product-details.module').then(m => m.ShoppingModule)},
  {path : 'checkout' , loadChildren : ()=>import('./components/checkout-page/checkout.module').then(m => m.CheckoutModule)},
  {path : 'orderCnf' , loadChildren : ()=>import('./components/orders-history/order-history.module').then(m => m.OrderHistoryModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes , {preloadingStrategy : PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
