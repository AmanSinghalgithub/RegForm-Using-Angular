import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')]],
      middleName: [''],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]*$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/), Validators.minLength(10), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      address: [''],
      city: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
      state: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[a-zA-Z]*$')]],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {}

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { mismatch: true };
  }

  onSubmit(): void {
    console.log(this.form.value);
    sessionStorage.setItem('userData', JSON.stringify(this.form.value));
    this.router.navigate(['/login']);
  }
}
