import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-allordes',
  templateUrl: './allordes.component.html',
  styleUrls: ['./allordes.component.css']
})
export class AllordesComponent implements OnInit{
  id:any = localStorage.getItem('id')
  data:any[]=[]
constructor(private cart:CartService,private loaderservices:LoaderService){

}
ngOnInit(): void {
  this.loaderservices.isloader.next(true)
  this.cart.getorders(this.id).subscribe((res)=>{
    this.loaderservices.isloader.next(false)
    console.log(res);
    this.data = res
    console.log(this.data);
    
  })
}
}
