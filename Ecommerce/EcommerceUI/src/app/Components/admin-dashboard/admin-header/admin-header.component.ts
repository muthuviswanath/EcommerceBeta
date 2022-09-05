import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userid');
    localStorage.removeItem('userRole');
    this.router.navigate(['/login']).then(() => window.location.reload());
  }
}
