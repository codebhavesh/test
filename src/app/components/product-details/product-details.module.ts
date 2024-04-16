import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { DetailsRoutingModule } from './details-routing.module';



@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class ShoppingModule { }
