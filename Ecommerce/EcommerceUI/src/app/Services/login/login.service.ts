import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseurl: string = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) {}

 

  public loginUser(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };

    return this.http.post(this.baseurl + 'Users/login', data, httpOptions);
  }
}
