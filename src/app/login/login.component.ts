import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login-service.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup
  login: any[] = []
  constructor(private fb: FormBuilder, private services: LoginService) { }

  ngOnInit(): void {
    this.createform()
  }
  createform() {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    const logindata = {
      Email: this.loginform.value.email,
      password: this.loginform.value.password
    }
    this.services.getuser(logindata).subscribe((res: any) => {
      this.login = (res)
    })
    console.log(logindata)


  }
}




