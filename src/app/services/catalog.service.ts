import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CatalogProducts } from '../models/catalog.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  addToCartData : CatalogProducts[]= [];
  orderData = new BehaviorSubject<CatalogProducts[]>(null);
  billingAddress = new BehaviorSubject<any>(null) ;
  badgeCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalAmount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  

  constructor(private http: HttpClient , private router : Router) { }


  _url : string = '/assets/dataSource.json'

  getdata(): Observable<CatalogProducts[]>{
   return this.http.get<CatalogProducts[]>(this._url)
  };

  addToCart(data : CatalogProducts){
    this.addToCartData.push(data);
    this.updateBadgeCount();
    this.getTotalAmount()
  }

  removeItem(index:number){
    this.addToCartData.splice(index , 1);
    this.updateBadgeCount();
    this.getTotalAmount()
  };

  private updateBadgeCount(): void {
    const count = this.addToCartData.length;
    this.badgeCountSubject.next(count);
  };

  returnToPage(){
    this.router.navigate(['/'])
  };

  returnToCart(){
    this.router.navigate(['/shoppingCart'])
  }

  getTotalAmount(){
  let total = 0 ;

    for(const item of this.addToCartData){
      total += item.price;
    }
     this.totalAmount.next(total);
  }
}
