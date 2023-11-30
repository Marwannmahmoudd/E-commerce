import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetService } from '../reset.service';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  ooh:boolean =true
  erorr:string = ""
constructor(private reset:ResetService , private send:ResetService , private _router:Router){}
resetCode:FormGroup = new FormGroup({
  resetCode:new FormControl(null , [Validators.required])
})
resetpass(resetCode:FormGroup){
  console.log(resetCode.value);
  this.ooh = false
  this.send.reset(resetCode.value).subscribe({
    next:(res)=>{
      this.ooh = true
      console.log(res);
      if(res.status === 'Success'){
        this._router.navigate(['/verfy'])
      }
    },
    error:(eror)=>{
      this.ooh = true
      console.log(eror);
      this.erorr = eror.error.message
    }
    
  })

}
}
