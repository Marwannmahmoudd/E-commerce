import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetService } from '../reset.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  ooh:boolean =true
  erorr:string = ""
constructor(private reset:ResetService , private send:ResetService , private _router:Router){

}
email:FormGroup = new FormGroup({
  email:new FormControl(null , [Validators.required,])
})
sendemail(email:FormGroup){
  console.log(email.value);
  this.ooh = false
  this.send.sendemail(email.value).subscribe({
    next:(res)=>{
      this.ooh = true
      console.log(res);
      this._router.navigate(['/reset'])
    },
    error:(eror)=>{
      this.ooh = true
      console.log(eror);
      this.erorr = eror.error.message
    }
    
  })

}
}
