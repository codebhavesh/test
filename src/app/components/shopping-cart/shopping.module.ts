import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';



@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
