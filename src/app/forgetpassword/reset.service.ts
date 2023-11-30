import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  baseurl:string = "https://route-ecommerce.onrender.com"
  constructor(private http:HttpClient ) {
    
   }
   sendemail(email:object):Observable<any>{
    return this.http.post(this.baseurl + '/api/v1/auth/forgotPasswords',email)
        }
        reset(resetCode:object):Observable<any>{
          return this.http.post(this.baseurl + '/api/v1/auth/verifyResetCode',resetCode)
              }
              update(resetCode:object):Observable<any>{
                return this.http.put(this.baseurl + '/api/v1/auth/resetPassword',resetCode)
                    }
}
