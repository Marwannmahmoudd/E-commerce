import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { ToastrService } from "ngx-toastr";
UserService
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router , private toast:ToastrService , private user:UserService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("userdata") !== null){
     try {
      jwtDecode(JSON.stringify( localStorage.getItem("userdata")))
     } catch (error) {
      localStorage.removeItem('userdata')
      this._router.navigate(['./login'])
      return false
     }
      return true
    }
    else{
      this.user.token = null
      this.toast.error('please login with your account' , '' , {
        positionClass: 'toast-bottom-left' ,
        
       })
        
     this._router.navigate(['./login'])
      return false
    }
  }
  
}
