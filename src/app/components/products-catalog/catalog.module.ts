import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductsCatalogComponent } from './products-catalog.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductsCatalogComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
  ]
})
export class CatalogModule { }
