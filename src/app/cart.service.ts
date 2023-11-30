import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseurl:string = "https://ecommerce.routemisr.com"
  headers:any = {
    token:localStorage.getItem('userdata') 
  }
  token:any = localStorage.getItem('userdata') 
  numberofcart:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private _httpclient:HttpClient , private _router:Router) {
    console.log(this.headers);
    
    console.log(this.headers);
    
    if(localStorage.getItem('userdata') === null){
_router.navigate(['/login'])
    }
    this.getcart().subscribe((res)=>{
      console.log(res);
      
      this.numberofcart.next(res.numOfCartItems)
      console.log(this.numberofcart.getValue());
    })
  }
  addtocart( productId:string):Observable<any>{
    console.log(this.token);
    
  return  this._httpclient.post(this.baseurl + '/api/v1/cart' , {
    productId: productId
  },{
    headers:this.headers
  })
  }
  getcart():Observable<any>{
    return  this._httpclient.get(this.baseurl + '/api/v1/cart' ,
      {
      headers:this.headers
    })
    }
    removecart(id:string):Observable<any>{
      return  this._httpclient.delete(this.baseurl + `/api/v1/cart/${id}` ,
        {
        headers:this.headers
      })
      }
      updatetocart( id:string , count:number):Observable<any>{
        return  this._httpclient.put(this.baseurl + `/api/v1/cart/${id}` , {
         count:count
        },{
          headers:this.headers
        })
        }
        deletecart():Observable<any>{
          return  this._httpclient.delete(this.baseurl + '/api/v1/cart' ,
            {
            headers:this.headers
          })
          }
          payment(shippingAddress:any , cartid:string):Observable<any>{
            return this._httpclient.post(this.baseurl + `/api/v1/orders/checkout-session/${cartid}?url=http://localhost:4200`,{
              shippingAddress:shippingAddress
            },{
              headers:this.headers
            })
          }
         getorders(id:any):Observable<any>{
            return  this._httpclient.get(this.baseurl + `/api/v1/orders/user/${id}`,
              {
              headers:this.headers
            })
            }
}
