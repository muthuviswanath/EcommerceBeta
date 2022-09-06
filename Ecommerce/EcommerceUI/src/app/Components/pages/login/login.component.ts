import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { IAuthenticatedResponse } from 'src/app/Interface/IAuthenticatedResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private route: Router, private http: HttpClient) {}
  ngOnInit() {}
  invalidLogin: boolean;
  userid: any;
  login = (form: NgForm) => {
    const credentials = {
      username: form.value.username,
      password: form.value.password,
    };
    if (form.valid) {
      this.http
        .post('http://localhost:5000/api/auth/login', credentials)
        .subscribe({
          next: (response: IAuthenticatedResponse) => {
            const token = response.token;
            this.http
              .get(
                'http://localhost:5000/api/Users/Username/' +
                  credentials.username
              )
              .subscribe((res) => {
                this.userid = res;
                localStorage.setItem('userid', this.userid);
              });
            localStorage.setItem('jwt', token);
            this.invalidLogin = false;
            if (
              credentials.username === 'admin' &&
              credentials.password === 'admin'
            ) {
              localStorage.setItem('userRole', 'Admin');

              this.route
                .navigate(['/admin'])
                .then(() => window.location.reload());
            } else {
              this.route
                .navigate(['/home'])
                .then(() => window.location.reload());
            }
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };
}
