import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LoaderService } from '../loader.service';
import * as $ from "jquery"
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  category:any[]=[]
constructor(private _productservices:ProductService , private loaderservices:LoaderService){

}
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this._productservices.getcategoris().subscribe({
    next:(res)=>{  this.loaderservices.isloader.next(false)
    
this.category = res.data
console.log(this.category);

    }
  })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 6
    }
  },
  nav: true
}
}
