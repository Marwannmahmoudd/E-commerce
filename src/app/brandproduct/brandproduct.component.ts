import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, retry } from 'rxjs';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { ProductService } from '../product.service';
import * as $ from "jquery"
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
  selector: 'app-brandproduct',
  templateUrl: './brandproduct.component.html',
  styleUrls: ['./brandproduct.component.css']
})
export class BrandproductComponent implements OnInit {
  brandproduct:any[]=[]
  brandorduct2:any[]= []
  id:string=''
  sure:boolean = true
constructor(private _productservices:ProductService , private _activ:ActivatedRoute , private _cartservices:CartService , private loaderservices:LoaderService){}
addtocart(id:string){
  this._cartservices.addtocart(id).subscribe((res)=>{
    console.log(res.numOfCartItems);
    this._cartservices.numberofcart.next(res.numOfCartItems)
  })
  }
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this._activ.paramMap.subscribe((res)=>{
    this.id = res.get('id') || ''
    console.log(this.id);
    
  })
this._productservices.getbrandproducts(this.id).subscribe((res)=>{
  this.loaderservices.isloader.next(false)
  this.brandorduct2 = res.data
  if(this.brandorduct2.length == 0){
    this.sure = false
  }
  else{
    this.sure = true
  }
})
}
}