import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCategoryComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-commerce';
}
