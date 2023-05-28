import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
export interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  isSubmitted = false;
  loginData: Login[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm();
  }
  loginForm() {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.login.controls;
  }

  onSignin(): void {
    if (this.login.invalid) {
      this.isSubmitted = true;
      return;
    } else {
      this.authService.login(this.login.value).subscribe((login: any) => {
        if (login) {
          localStorage.setItem('email', login.email);
          localStorage.setItem('passwoprd', login.password);
          localStorage.setItem('role', login.role);
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
