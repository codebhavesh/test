import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../../services/catalog.service';
import { CatalogProducts } from '../../models/catalog.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  getProduct : CatalogProducts ;
  id : number ;
  constructor(private catalogService : CatalogService  , private route : ActivatedRoute , private router : Router , private toastr: ToastrService){}

  ngOnInit(): void {

     this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.catalogService.getdata().subscribe(res => {
      for(const item of res){
        if(item.id == this.id){
          this.getProduct = item
        }
      }
    }) 

  }

  onAddToCart(addCart :CatalogProducts){
    console.log(addCart);
    const findId = this.catalogService.addToCartData.find(item => item.id == addCart.id);
    console.log(findId);
    if(!findId){
      this.catalogService.addToCart(addCart);
      this.router.navigate(['/shoppingCart'])
    } else {
      this.toastr.warning('Item is already in the shopping cart.' ,'', {positionClass : 'toast-top-center' , closeButton: true , timeOut: 3000})
      // alert('Item is already in the shopping cart.')
    }
    
  }

  toHomePage(){
  this.catalogService.returnToPage()
  }

}
