import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  userForm: FormGroup;
  userID: any;
  userData: any = {};
  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userID = +localStorage.getItem('userid');

    if (this.userID == 0) {
      this.route.navigateByUrl('/login');
    }
    this.getUserById(this.userID);
  }
  getUserById(id: number) {
    this.service.getuserdetail(id).subscribe((res) => {
      this.userData = res;
    });
  }
  update() {
    // console.log(this.userData);
    this.service.updateuserdata(this.userID, this.userData).subscribe(() => {
      alert('Updated Profile Successfully!!');
      this.route.navigate(['/home']);
    });
  }
}
