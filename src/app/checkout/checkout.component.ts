import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  ooh:boolean = true
  id:string = ''
  constructor(private _cartservices:CartService ,private _router:Router ,private _activ:ActivatedRoute){}
checout:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)
})
gotourl(url:string){
window.location.href = url
}
handle(checkout:FormGroup){
  this.ooh = false
this._cartservices.payment(checkout.value,this.id).subscribe((res)=>{

  this.gotourl(res.session.url)
  this.ooh = true
  console.log(res.session.url);
  
})
}
ngOnInit(): void {
  this._activ.paramMap.subscribe((res)=>{
  this.id =  res.get('id') || ''
  })
}
}
