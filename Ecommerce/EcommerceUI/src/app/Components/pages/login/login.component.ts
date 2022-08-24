import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { Iuser } from 'src/app/Iuser';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "Surabhi";
  password: string = "";


  userList: Iuser[];
  constructor(private service: UserService) { }

  ngOnInit(): void {


  }

  checkLogin() {
    // this.service.getUserByName(this.username)
    // .subscribe(()
    //   res => this.userList = res
    // )
    // console.log(this.userList.find(result => {
    //   result
    // }))
    this.service.getUserByName(this.username).subscribe(users => {
     // users.forEach()
    });
  }

}
