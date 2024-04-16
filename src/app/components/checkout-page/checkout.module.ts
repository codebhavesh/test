import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutPageComponent } from './checkout-page.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../models/material.module';



@NgModule({
  declarations: [CheckoutPageComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],

})
export class CheckoutModule { }
