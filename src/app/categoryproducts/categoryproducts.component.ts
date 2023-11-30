import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { ProductService } from '../product.service';
import * as $ from "jquery"
@Component({
  selector: 'app-categoryproducts',
  templateUrl: './categoryproducts.component.html',
  styleUrls: ['./categoryproducts.component.css']
})
export class CategoryproductsComponent implements OnInit{
  id:string=''
  data:any[]=[]
  sure:boolean = true
constructor(private _active:ActivatedRoute , private _productservices:ProductService , private _cartservices:CartService , private loaderservices:LoaderService) {}
addtocart(id:string){
  this._cartservices.addtocart(id).subscribe((res)=>{
    console.log(res.numOfCartItems);
    this._cartservices.numberofcart.next(res.numOfCartItems)
  })
  }
ngOnInit(): void {
  this._active.paramMap.subscribe((res)=>{
    this.id = res.get('id') || ''
    console.log(this.id);
    
  })
  this.loaderservices.isloader.next(true)
  this._productservices.getcategoryproducts(this.id).subscribe((res)=>{
    this.loaderservices.isloader.next(false)
  
this.data = res.data
if(this.data.length == 0){
  this.sure = false
}
else{
  this.sure = true
}
console.log(this.sure);

  })

}
}
