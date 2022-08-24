import { Injectable, OnInit, Type } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable } from "rxjs";
import {IProducts} from '../../Interface/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor(private http:HttpClient){}
  baseurl:string="http://localhost:5000/api/"
  ngOnInit(): void {
      
  }
  getAllProducts():Observable<IProducts[]>{
      return this.
          http
          .get<IProducts[]>(this.baseurl + "Products");
  }
  postAllProducts(data:any){
    const httpoptions={
      headers: new HttpHeaders({ 'Content-Type': 'application/jason; charset=utf-8' })
    }
      
}
}
