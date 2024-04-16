import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogService } from '../../services/catalog.service';
import { CatalogProducts } from '../../models/catalog.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css',
})
export class CheckoutPageComponent implements OnInit {
  customerDetails: FormGroup;
  checkoutAmount :number = 0;
  checkoutItems : CatalogProducts[];
  checkoutLength : number = 0;
  constructor(private catalogService : CatalogService , private router : Router , private toastr: ToastrService) {}

  ngOnInit(): void {
    this.customerDetails = new FormGroup({
      username: new FormControl(null , [Validators.required , Validators.minLength(2)]),
      email: new FormControl(null , [Validators.required , Validators.email]),
      phone: new FormControl(null , [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      zipcode: new FormControl(null, [
        Validators.required
      ]),
      paymentMethod : new FormControl('' ,Validators.required),
      ccName : new FormControl('' ,Validators.required),
      ccNumber : new FormControl('' , Validators.required),
      ccExpiration : new FormControl('' ,Validators.required),
      ccv : new FormControl('' , Validators.required)
    });

  this.catalogService.totalAmount.subscribe(amount =>{this.checkoutAmount = amount});
  this.checkoutItems = this.catalogService.addToCartData;
  this.catalogService.badgeCountSubject.subscribe(res =>{ this.checkoutLength = res});
  // console.log(this.checkoutItems)
  };

  orderCnf(){
    const check = this.checkoutItems;
    const add = this.customerDetails.value ;
    this.catalogService.orderData.next(check);
    this.catalogService.billingAddress.next(add);
    this.toastr.success('Payment Successfull.' ,'', {positionClass : 'toast-top-center' , closeButton: true , timeOut: 3000});
    this.router.navigate(['/orderCnf']);
    this.catalogService.addToCartData = [];
    this.catalogService.badgeCountSubject.next(0);


  }

  toHomePage(){
   this.catalogService.returnToCart()
  }

}
