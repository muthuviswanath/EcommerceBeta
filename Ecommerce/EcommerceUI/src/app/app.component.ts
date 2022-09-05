import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'EcommerceUI';
  showHeader: boolean = true;
  router: any;
  user: any = '';

  constructor(router: Router) {
    // router.events.forEach((event) => {
    //   if(event instanceof NavigationStart) {
    //     this.showHeader = event.url !== "/admin";
    //   }
    // });
  }
  isAdmin() {
    if (localStorage.getItem('userRole') == 'Admin') {
      return true;
    } else {
      return false;
    }
  }
}
