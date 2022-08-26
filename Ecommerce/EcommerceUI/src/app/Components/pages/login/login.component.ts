import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login/login.service';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formData:any={};
  // public showMessage:boolean=false;
  username=new FormControl('');
  password=new FormControl('');
  constructor(private service: LoginService,private route:Router,private formBuilder:FormBuilder,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm
  }
  loginForm:FormGroup=this.builder.group({
    username:this.username,
    password:this.password
  })

  checkLogin() {

    this.formData=this.loginForm.value;
    // this.showMessage=true;
    if(this.loginForm.valid){
      this.service.loginUser(this.loginForm.value).subscribe( res=>{
        if(res==null){
          // alert("You Need To Register")
          this.route.navigateByUrl('/signup')
        }
        else{
          // alert("Login Successfull")
          this.route.navigateByUrl('/wishlist')
        }
      });
      }
   }
  

}
