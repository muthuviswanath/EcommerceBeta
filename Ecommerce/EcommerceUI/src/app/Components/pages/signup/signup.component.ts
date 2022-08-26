import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';
import { Iuser } from 'src/app/Interface/Iuser';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private service: UserService) { }
    model: any = {};
  ngOnInit(): void {}


  public signUp():void {
      
    this.service.addUser(this.model).subscribe();
   
  }
}
