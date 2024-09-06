import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  
  login: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const storedUser = JSON.parse(sessionStorage.getItem('userData') || '{}');

    if (storedUser && storedUser.email === this.login.value.email && storedUser.password === this.login.value.password) {
      sessionStorage.setItem('isloggedIn', 'true');
      this.router.navigate(['/home']); 
    } else {
      alert('Invalid Login');
      
    }
  }
}
