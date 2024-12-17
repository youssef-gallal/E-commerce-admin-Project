import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from "./login/login.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

}

