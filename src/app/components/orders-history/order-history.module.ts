import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersHistoryComponent } from './orders-history.component';
import { OrderRoutingModule } from './order-routing.module';



@NgModule({
  declarations: [OrdersHistoryComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderHistoryModule { }
