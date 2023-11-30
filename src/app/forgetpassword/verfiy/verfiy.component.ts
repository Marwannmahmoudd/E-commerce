import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetService } from '../reset.service'
@Component({
  selector: 'app-verfiy',
  templateUrl: './verfiy.component.html',
  styleUrls: ['./verfiy.component.css']
})
export class VerfiyComponent {
  ooh:boolean =true
  erorr:string = ""
  show:boolean = true
constructor(private reset:ResetService , private send:ResetService , private _router:Router){

}
verfy:FormGroup = new FormGroup ({
  email:new FormControl(null , [Validators.required,Validators.email]),
  newPassword:new FormControl(null , [Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)])
})
verfiy(verfy:FormGroup){
  console.log(verfy.value);
  this.ooh = false
  this.send.update(verfy.value).subscribe({
    next:(res)=>{
      this.ooh = true
      console.log(res);
      if(res.TOKEN !== null){
        this._router.navigate(['/login'])
      }
    },
    error:(eror)=>{
      this.ooh = true
      console.log(eror);
      this.erorr = eror.error.message
    }
    
  })

}
showpass(){
  this.show = !this.show
  console.log(this.show);
  
}
}
