import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, reduce } from 'rxjs';
import { Iuser } from 'src/app/Interface/Iuser';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://localhost:5000/api/'
  ngOnInit(): void { }


  addUser(data: any) {

    const httpOptions = {

      headers: new HttpHeaders({

        'Content-Type': 'application/json; charset=utf-8',

      }),

    };

    return this.http.post<any>(

      this.baseurl + 'Users',

      data,

      httpOptions

    );

  
    }
}
