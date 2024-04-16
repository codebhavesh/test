import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { CatalogProducts } from '../../models/catalog.interface';
import { Observable, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-products-catalog',
  templateUrl: './products-catalog.component.html',
  styleUrl: './products-catalog.component.css'
})
export class ProductsCatalogComponent implements OnInit{

 products : CatalogProducts[] = [];
 filterProducts : CatalogProducts[] = [];

 searchTerm : string = '';
 badgeCount :number = 0 ;
 constructor(private catalogService : CatalogService){}

 ngOnInit(): void {
   this.catalogService.getdata().subscribe(res =>{ this.products = res ; this.filterProducts = res});
   this.catalogService.badgeCountSubject.subscribe(count => {
    this.badgeCount = count
   })
 }

 search(){
  of(this.searchTerm).pipe(debounceTime(500) , distinctUntilChanged() , switchMap(res =>{return this.filterData(res)})).subscribe(data =>{this.filterProducts = data ; console.log(data)})
 }

 filterData(term : string) : Observable<CatalogProducts[]>{
   if(term.length == 0){
    return of(this.products)
   };
   return of(this.filterProducts = this.products.filter(item => item.title.toLowerCase().includes(term.toLowerCase()) || item.category.toLowerCase().includes(term.toLowerCase())))
 };

//  toDetailPage(data : CatalogProducts ){
//   // console.log(data);
//   this.catalogService.onDetailPage.emit(data);
//  }
}
