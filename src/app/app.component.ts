import { Component  } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainCategoryComponent } from "./main-category/main-category.component";
import { SubCategoryComponent } from "./sub-category/sub-category.component";
import { LoginComponent } from "./login/login.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent,
    RouterModule,
    LoginComponent,
    CommonModule],
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

