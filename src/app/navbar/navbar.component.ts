import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';
import { UserService } from '../user.service';
import { Observable ,BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login:any
  numbercard:number = 0
constructor(public _userservise:UserService , public _carts:CartService , public loaderservices:LoaderService){
  _carts.numberofcart.subscribe({
  next:(value)=>{
    this.numbercard = value
  }
 })
  console.log(this.numbercard);
  
 console.log(_userservise.token);

    if(_userservise.token !== null){
      this.login =true 

      
    }else{
      this.login = false
      
      
    }
    console.log(this.login);
    
}
}
