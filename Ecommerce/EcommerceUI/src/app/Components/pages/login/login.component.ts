import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ILoginModel } from 'src/app/Interface/ILoginModel';
import { IAuthenticatedResponse } from 'src/app/Interface/IAuthenticatedResponse';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  credentials: ILoginModel = { username: '', password: '' };
  login = (form: NgForm) => {
    if (form.valid) {
      this.http
        .post<IAuthenticatedResponse>(
          'https://localhost:5001/api/auth/login',
          this.credentials,
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          }
        )
        .subscribe({
          next: (response: IAuthenticatedResponse) => {
            const token = response.token;
            localStorage.setItem('jwt', token);
            this.invalidLogin = false;
            this.route.navigate(['/']);
          },
          error: (err: HttpErrorResponse) => (this.invalidLogin = true),
        });
    }
  };
  userData: any;
  public formData: any = {};
  username = new FormControl('');
  password = new FormControl('');
  constructor(
    private service: LoginService,
    private route: Router,
    private formBuilder: FormBuilder,
    private builder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm;
  }
  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password,
  });

  checkLogin() {
    this.formData = this.loginForm.value;
    if (this.loginForm.valid) {
      this.service.loginUser(this.loginForm.value).subscribe((res) => {
        this.userData = res;
        if (this.userData == null) {
          this.route.navigateByUrl('/signup');
        } else {
          localStorage.setItem('userid', this.userData.userid);
          this.route.navigateByUrl('/products');
        }
      });
    }
  }
}
