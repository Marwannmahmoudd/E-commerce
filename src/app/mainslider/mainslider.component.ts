import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent implements OnInit{
  
  constructor(){

  }
  ngOnInit(): void {

    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag:true,
    pullDrag: false,
    dots:false,
    autoplay : true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  }
