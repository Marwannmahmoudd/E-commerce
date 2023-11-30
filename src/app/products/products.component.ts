import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  catefory:any[]=[]
  products:any[]=[]
  searchterm:string = ''
  constructor(private _productservise:ProductService , private _cartservices:CartService , private loaderservices:LoaderService){}
  addtocart(id:string){
  this._cartservices.addtocart(id).subscribe((res)=>{
    console.log(res.numOfCartItems);
    this._cartservices.numberofcart.next(res.numOfCartItems)
  })
  }
  ngOnInit(): void { this.loaderservices.isloader.next(true)
    this._productservise.getproduct().subscribe({

      next:(res)=>{ this.loaderservices.isloader.next(false)
        this.products = res.data
        console.log(this.products);
        
      }
      
    })
  
  }
  }

