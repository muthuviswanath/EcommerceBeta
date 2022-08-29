import { Injectable, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from "rxjs";
import {IProducts} from '../../Interface/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  // productid:any;
  // public data:any={}
  // setOptions(option,value){
  //   this.data[option]=value;
  // }
  // getOptions(){
  //   return this.data;
  // }
  constructor(private http:HttpClient){}
  baseurl:string="http://localhost:5000/api/"
  ngOnInit(): void {
      
  }
  getAllProducts():Observable<IProducts[]>{
      return this.
          http
          .get<IProducts[]>(this.baseurl + "Products");
  }
  postAllProducts():Observable<IProducts[]>{
    return this.
        http
        .get<IProducts[]>(this.baseurl + "Products");
}

addProduct(data: any) {

  const httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json; charset=utf-8',

    }),

  };
  

  return this.http.post<any>(

    this.baseurl + 'Products',

    JSON.stringify(data),

    httpOptions

  );


  }

  deleteProduct(id:any)
  {
    const httpOptions = {

      headers: new HttpHeaders({
  
        'Content-Type': 'application/json; charset=utf-8',
  
      }),
  
    };
    return this.http.delete(this.baseurl+"Products/"+id,httpOptions);

  }

  // updateProduct(id:Number,data:any)
  // {
  //   const httpOptions = {

  //     headers: new HttpHeaders({
  
  //       'Content-Type': 'application/json; charset=utf-8',
  
  //     }),
  
  //   };
  //   return this.http.put(this.baseurl+"Products/"+id,data,httpOptions);
  // }

  public getProductById(productid:any){

    return this.http.get(`${this.baseurl}Products/${productid}`);
  
  }

}
