import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersHistoryComponent } from './orders-history.component';




const routes: Routes = [
  {
    path: '',
    component: OrdersHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }