import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import * as $ from "jquery"
import { ToastrService } from "ngx-toastr";
import { FormGroup ,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  data:any
  data2:any
  countsettime:any;
  id:string = ''
  ooh:boolean = true
  ooh2:boolean = true
  erorr:any
  indexx:any
  check:boolean = true
constructor(private _cartservices:CartService ,private loaderservices:LoaderService , private toast:ToastrService, private _activ:ActivatedRoute ,private user:UserService){
}

checout:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)
})
gotourl(url:string){
window.location.href = url
}
handle(checkout:FormGroup , id:string ){
  console.log(checkout);
  
  this.ooh = false
this._cartservices.payment(checkout.value,id ).subscribe((res)=>{
  this.ooh = true
  this.gotourl(res.session.url)
 
  console.log(res.session.url);
  
})
}

getindex(index:any){
this.indexx = index
console.log(this.indexx);
}
deletitem(id:string,index?:any){
  
  
console.log(index);
this.data.products.splice(this.indexx ,1)
  this._cartservices.removecart(id).subscribe((res)=>{
    this.data = res.data
    this.data2 = res.data
    
    console.log(this.data2._id);
    

   this._cartservices.numberofcart.next(res.numOfCartItems)
   
  })
}
shownot(){
  this.toast.error('product has been successfully deleted' , '' , {
   positionClass: 'toast-top-right' 
  })
}
updateitem(idd:string,count:number){

  if(count == 0){
this.deletitem(idd)
  }else{
clearTimeout(this.countsettime)

  this.countsettime =  setTimeout(() => {
 
      this._cartservices.updatetocart(idd,count).subscribe((res)=>{
        
        this.data = res.data
        this.data2 = res.data
        console.log(res.data);
        
      })
    }, 1000);
   
  }
 
}
deleteallcart(){
  this._cartservices.deletecart().subscribe((res)=>{
    this.data = res.data
    this.data2 = res.data
    console.log(res);
    this._cartservices.numberofcart.next(res.numOfCartItems)
  })
}

ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  setTimeout(() => {
    this.loaderservices.isloader.next(false)
  }, 1300);
  this._cartservices.getcart().subscribe({next:(res)=>{
    this.ooh2 = true
    this.data = res.data
    this.data2 = res.data
    console.log(this.data2.products);
    this._activ.paramMap.subscribe((res)=>{
      this.id =  res.get('id') || ''
    
      })
  },
  error:(eror)=>{
   this.erorr = eror.error.message
   console.log(this.erorr);
   if(this.data2 === null || this.erorr !== null ||  this.erorr === undefined){
    this.loaderservices.isloader.next(false)
  this.ooh2 = false
  console.log(this.erorr);
   }
}
    
  
})

 this.user.decode()
}
}
