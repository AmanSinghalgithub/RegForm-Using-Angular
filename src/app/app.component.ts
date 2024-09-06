import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  title = 'RegForm';
  isLoggedIn = false;

  constructor(private router: Router) {
    this.checkLoginStatus()
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.checkLoginStatus();
  }


  checkLoginStatus() {

    this.isLoggedIn = !!sessionStorage.getItem('userData');
  }

  logout() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/components/login');
  }
}
