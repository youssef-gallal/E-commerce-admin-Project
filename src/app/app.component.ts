import { Component  } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from "./login/login.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from "./nav/nav.component";

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

  constructor( public router: Router){}

  hideNavBar() {
    const url = this.router.url;
    return (url.includes('/login'))
  }

}

