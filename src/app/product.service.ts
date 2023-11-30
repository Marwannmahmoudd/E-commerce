import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  baseurl:string = "https://ecommerce.routemisr.com/"
  constructor(private _httpclient:HttpClient) { 
}
getproduct():Observable<any>{
 return this._httpclient.get(this.baseurl + 'api/v1/products')
}
getproductdetails(id:string):Observable<any>{
  return this._httpclient.get(this.baseurl+`api/v1/products/${id}`)
    }
    getcategoris():Observable<any>{
return this._httpclient.get(this.baseurl + 'api/v1/categories')
    }
    getbrands():Observable<any>{
      return this._httpclient.get(this.baseurl + 'api/v1/brands')
    }
    getbranddetails(id:string):Observable<any>{
return this._httpclient.get(this.baseurl + 'api/v1/products')
    }
    getcategoryproducts(id:string):Observable<any>{
      return this._httpclient.get(this.baseurl+ `api/v1/products?category=${id}`)
    }
    getbrandproducts(id:string):Observable<any>{
      return this._httpclient.get(this.baseurl+ `api/v1/products?brand=${id}`)
    }
}
