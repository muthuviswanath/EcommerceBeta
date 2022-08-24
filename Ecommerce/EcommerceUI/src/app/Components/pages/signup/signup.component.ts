import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { Iuser } from 'src/app/Iuser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      username: [''],
      password: [''],
      email: [''],
      address: ['']

    })
  }

  signUp() {
    //   this.http.post<any>("http://localhost:5000/api/users",this.signupForm.value).subscribe(res=>{alert("Signup Successful");
    //   this.signupForm.reset(); 
    //   this.router.navigate(['login'])},err=>{
    //     alert("Something Went Wrong")
    //   }
    // )
    const user : Iuser = {
      address: 'abc',
      emailid: 'test@test.com',
      password: 'test@123',
      username : 'test',
      userid : 123123
    }
    this.userService.getUserByPost(user).subscribe(data => {

    });
  }
}
