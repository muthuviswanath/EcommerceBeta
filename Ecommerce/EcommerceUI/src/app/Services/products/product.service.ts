import { Injectable, OnInit, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProducts } from '../../Interface/IProducts';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnInit {
  public data: any = {};
  public pid: any;
  constructor(private http: HttpClient) {}
  setOptions(option: any, value: any) {
    this.data[option] = value;
  }
  getOptions() {
    return this.data;
  }
  baseurl: string = 'http://localhost:5000/api/';
  ngOnInit(): void {}
  getAllProducts(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(this.baseurl + 'Products');
  }
  

public getProductById(productid:any){
  return this.http.get(`${this.baseurl}Products/${productid}`);
}
public addCart(data:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    })
  };
  return this.http.post(this.baseurl+"Carts",data,httpOptions);
}
public addwishlist(data:any){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json; charset=utf-8'
    })
  };
  
  return this.http.post(this.baseurl+"Wishlists",data,httpOptions);

}
getProductdetail(ID: number) {
  return this.http.get(this.baseurl + 'Products/' + ID);
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

  updateProduct(id:any,data:any)
  {
    const httpOptions = {

      headers: new HttpHeaders({
  
        'Content-Type': 'application/json; charset=utf-8',
  
      }),
  
    };
    console.log(data);

    return this.http.put(this.baseurl+"Products/"+id,data,httpOptions);
  }



}
