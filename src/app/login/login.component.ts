import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  login: any[] = []
  constructor(private fb: FormBuilder,
    private router: Router,
    private services: LoginService) { }

  ngOnInit(): void {
    this.createForm()
  }
  createForm() {
    this.loginForm = this.fb.group({
      userNameOrEmailAddress: ['admin', [Validators.required]],
      password: ['123qwe', [Validators.required]]
    })
  }

  submit() {
    const loginData = {
      userNameOrEmailAddress: this.loginForm.value.userNameOrEmailAddress,
      password: this.loginForm.value.password
    }
    this.services.getUser(loginData).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('token', res.result.accessToken)
      localStorage.setItem('userName',loginData.userNameOrEmailAddress)
      this.router.navigate(['/main_category'], {
      }).then()
    })


  }
}




