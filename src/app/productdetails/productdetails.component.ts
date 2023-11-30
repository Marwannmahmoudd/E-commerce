import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { ToastrService } from "ngx-toastr";
import { UserService } from '../user.service';

export interface Data {
  sold: number
  images: string[]
  subcategory: Subcategory[]
  ratingsQuantity: number
  _id: string
  title: string
  slug: string
  description: string
  quantity: number
  price: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  createdAt: string
  updatedAt: string
  __v: number
  reviews: any[]
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
 
constructor(private _active:ActivatedRoute , private _productservices:ProductService ,private user:UserService  ,private toast:ToastrService , private _cartservices:CartService , private loaderservices:LoaderService , private _route:Router){

}

 productdetails: Partial<Data> = {}
id:string = ''
addtocart(id:any){
  if(!localStorage.getItem('userdata') ){
    this.toast.error('please login with your account' , '' , {
      positionClass: 'toast-bottom-left' ,
      
     })
    this.user.token = null
    this._route.navigate(['/login'])
    
  }
  this._cartservices.addtocart(id).subscribe((res)=>{
    console.log(res.numOfCartItems);
    this._cartservices.numberofcart.next(res.numOfCartItems)
  })
  }
  shownot(){
    if(!localStorage.getItem('userdata') ){
      this._route.navigate(['/login'])
      
    }
    else{
      this.toast.success('product has been successfully added' , '' , {
        positionClass: 'toast-top-right' ,
        
       })
    }
   
   
  }
ngOnInit(): void {
  this._active.paramMap.subscribe((all)=>{
   this.id = all.get('id') || ''
    console.log(this.id);
    
  })
  this.loaderservices.isloader.next(true)
  this._productservices.getproductdetails(this.id).subscribe((respons)=>{
    this.loaderservices.isloader.next(false)
    this.productdetails =  respons.data
    console.log(this.productdetails);
    
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  autoplay : true,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}
}

