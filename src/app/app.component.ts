import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { LoginService } from './login/services/login-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,
    RouterModule,
    CommonModule, NavComponent , MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  loading$: Observable<boolean>

  constructor(public router: Router,
    private loginService : LoginService,
     private services: LoginService) {

    this.loading$ = this.loginService.loading$;
   }

  hideNavBar() {
    const url = this.router.url;
    return (url.includes('/login'))
  }

}

