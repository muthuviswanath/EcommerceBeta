import { ResourceLoader } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ProductNameSearch'
})

export class Filter implements PipeTransform{
    
    public transform(value: any[], searchtext:string) {
        return searchtext.length > 2 ? value.filter( res => res.productname.toLowerCase().includes(searchtext.toLowerCase())) : value;
    }
    public sorting(value:any,args:any[]):any{
        const sortField=args[0];
        value.sort((a:any,b:any)=>{
            if(a[sortField]<b[sortField]){
                return -1;
            }else if(a[sortField]>b[sortField]){
                return 1;
            }else{
                return 0;
            }
        });
    }

  
}