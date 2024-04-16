import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsCatalogComponent } from './products-catalog.component';




const routes: Routes = [
  {
    path: '',
    component: ProductsCatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }