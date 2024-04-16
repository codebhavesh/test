import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { CatalogProducts } from '../../models/catalog.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{

  cartData : CatalogProducts[];
  shoppingAmount : number = 0 ;
  constructor(private catalogService : CatalogService , private router : Router){}

  ngOnInit(): void {
    this.cartData = this.catalogService.addToCartData;
    this.catalogService.totalAmount.subscribe(amount =>{
      this.shoppingAmount = amount;
    })
  }
 
  onRemoveItem(index: number){
    this.catalogService.removeItem(index);
  }

  onReturnToPage(){
    // this.router.navigate(['/'])
    this.catalogService.returnToPage();
  }

  onCheckoutPage(){
    this.router.navigate(['/checkout'])
  }


}
