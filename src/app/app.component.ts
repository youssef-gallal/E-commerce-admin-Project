import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainCategoryComponent } from "./main-category/main-category.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, MainCategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}

