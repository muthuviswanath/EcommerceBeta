import { Injectable, OnInit } from '@angular/core';
import { Iuser } from './Iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, reduce } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }
  baseurl: string = 'http://localhost:5000/api/'
  ngOnInit(): void { }
  indvuser: Iuser;

  getAllUsers(): Observable<Iuser[]> {

    return this.http

      .get<Iuser[]>(this.baseurl + 'users')

      .pipe(map((res: any) => res));

  }
  getUserByName(username: string): Observable<Iuser[]> {
    return this.http.get<Iuser[]>(this.baseurl + 'users');
  }

  getUserByPost(user: Iuser): Observable<any> {
    const path = this.baseurl + 'users';
    const options = {
      headers: this.getHeaders()
    }
    return this.http.post(path, JSON.stringify(user), options);
  }

  getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');

    headers = headers.append('Access-Control-Allow-Origin', '*');

    headers = headers.append('Cache-Control', 'no-cache');


    return headers;
  }
}
