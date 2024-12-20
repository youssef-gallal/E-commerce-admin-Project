import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { LoginService } from '../login/services/login-service.service';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDividerModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  usertype: any = null

  constructor(private services: LoginService) { }
  ngOnInit(): void {
    this.services.usertype.subscribe((res: any) => { this.usertype = res })
    console.log(this.usertype)
  }


}
