import { ResourceLoader } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ProductNameSearch'
})

export class Filter implements PipeTransform{
    
    public transform(value: any[], searchtext:string) {
        return searchtext.length > 1 ? value.filter( res => res.productname.toLowerCase().includes(searchtext.toLowerCase())) : value;
    }
  

  
}