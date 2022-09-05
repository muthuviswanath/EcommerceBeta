import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}
  baseurl: string = 'http://localhost:5000/api/';

   getAllOrders()
   {
    return this.http.get(this.baseurl+'Orders');
   }
}
