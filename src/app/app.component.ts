import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";
import { LoginService } from './login/services/login-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,
    RouterModule,
    CommonModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  constructor(public router: Router, private services: LoginService) { }

  hideNavBar() {
    const url = this.router.url;
    return (url.includes('/login'))
  }

}

