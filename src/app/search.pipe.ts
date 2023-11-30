import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[],searchterm:string):any[] {
    
    
    return product.filter((products)=>
      products.title.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase())
      
    );
    
  }

}
