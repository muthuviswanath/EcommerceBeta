import { Injectable, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { map, Observable } from "rxjs";
import {IProducts} from './IProducts';

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
}
