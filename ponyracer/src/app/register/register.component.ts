import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginCtrl = this.fb.control<string | null>('', Validators.required);
  passwordCtrl = this.fb.control<string | null>('', Validators.required);
  birthYearCtrl = this.fb.control<number | null>(null, Validators.required);
  userForm = this.fb.group({
    login: this.loginCtrl,
    password: this.passwordCtrl,
    birthYear: this.birthYearCtrl
  });

  constructor(private fb: FormBuilder) {}

  register(): void {
    console.log(this.userForm.value);
  }
}
