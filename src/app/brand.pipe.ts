import { Pipe, PipeTransform } from '@angular/core';
import { BrandproductComponent } from './brandproduct/brandproduct.component';
@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {
  constructor(private _brand:BrandproductComponent){

  }
  transform(brand:any[]):any[]{
    return  brand.filter((product)=>{
       product.brand._id.includes(this._brand.id)
     });
     
     
  }

}
