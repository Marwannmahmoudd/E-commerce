import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';
import { ProductService } from '../product.service';
import * as $ from "jquery"
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  brands:any[]=[]
constructor(private _productservices:ProductService , private loaderservices:LoaderService){

}
ngOnInit(): void{
  this.loaderservices.isloader.next(true)
this._productservices.getbrands().subscribe((res)=>{
  this.loaderservices.isloader.next(false)
this.brands = res.data
console.log(this.brands);

})
}
}
