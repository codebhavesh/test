import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { CatalogProducts } from '../../models/catalog.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.css'
})
export class OrdersHistoryComponent implements OnInit{
  ordersData : CatalogProducts[];
  billingData : any;
  // orderData : CatalogProducts[];
  constructor(private catalogService : CatalogService , private route: Router){}

  ngOnInit(): void {
    this.catalogService.orderData.subscribe(data =>{ 
      this.ordersData = data;
      console.log(this.ordersData);
    });
    this.catalogService.billingAddress.subscribe(res =>{
       this.billingData = res;
       console.log(this.billingData);
      });
   
  
  }
  onReturnToPage(){
  this.catalogService.returnToPage();
  }

}
