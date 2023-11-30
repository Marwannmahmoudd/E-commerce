import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from "jquery"
@Component({
  selector: 'app-categoryss2',
  templateUrl: './categoryss2.component.html',
  styleUrls: ['./categoryss2.component.css']
})
export class Categoryss2Component implements OnInit{
  category:any[]=[]
constructor(private _productservices:ProductService){

}
ngOnInit(): void {
  this._productservices.getcategoris().subscribe({
    next:(res)=>{
this.category = res.data
    }
  })
 
}
customOptions:
 OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplay : true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 3
    },
    400: {
      items: 5
    },
    740: {
      items: 6
    },
    940: {
      items: 7
    }
  },
  nav: true
}

}
