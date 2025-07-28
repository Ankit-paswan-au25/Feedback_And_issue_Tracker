import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Login request:', email, password);
      this.userService.login({ email, password }).subscribe((data: any) => {
        console.log("hi")
        localStorage.setItem('token', data.token)
        this.route.navigate(['user/dashboard'])
      })
    }
    console.log(this.loginForm.invalid)
  }
  navigateToSignUp() {
    this.route.navigate(['/signUp'])
  }
}
