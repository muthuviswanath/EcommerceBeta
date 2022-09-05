import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, reduce } from 'rxjs';
import { Iuser } from 'src/app/Interface/Iuser';
@Injectable({
  providedIn: 'root',
})
export class UserService{
  public data: any = {};
  constructor(private http: HttpClient) {}
  setOptions(option: any, value: any) {
    this.data[option] = value;
  }
  getOptions() {
    return this.data;
  }
  baseurl: string = 'http://localhost:5000/api/';
 

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
  getuserdetail(ID:any){
    return this.http.get(this.baseurl + 'Users/' + ID);
  }
  updateuserdata(id:any,data:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
    };
    console.log(data);

    return this.http.put(this.baseurl + 'Users/' + id, data, httpOptions);

  }
}
