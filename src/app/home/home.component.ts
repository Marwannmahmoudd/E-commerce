import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { ProductService } from '../product.service';
import * as $ from "jquery"
import { ToastrService } from "ngx-toastr";
import { UserService } from '../user.service';
import { Router } from '@angular/router';


export interface Daum {
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
  id: string
  priceAfterDiscount?: number
  availableColors?: any[]
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  catefory:any[]=[]
products:Daum[]=[]
searchterm:string = ''
constructor(private _productservise:ProductService , private _cartservices:CartService , private loaderservices:LoaderService , private toast:ToastrService ,private user:UserService ,private _route:Router){}
addtocart(id:string){
  if(!localStorage.getItem('userdata') ){
    this.toast.error('please login with your account' , '' , {
      positionClass: 'toast-top-right' ,
      
     })
    this.user.token = null
    this._route.navigate(['/login'])
    
  }
this._cartservices.addtocart(id).subscribe((res)=>{
  console.log(res)
  console.log(res.numOfCartItems);
  this._cartservices.numberofcart.next(res.numOfCartItems)
}


)
}

shownot(){

  if(!localStorage.getItem('userdata') ){
    this._route.navigate(['/login'])
    
  }
  else{
    this.toast.success('product has been successfully added' , '' , {
      positionClass: 'toast-top-left' ,
      
     })
  }
 
 
}
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this._productservise.getproduct().subscribe({
    next:(res)=>{
      this.loaderservices.isloader.next(false)
      this.products = res.data
      console.log(this.products);
      
    }
    
  })

}
}
