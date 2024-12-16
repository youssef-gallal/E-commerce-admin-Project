import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-bred-crump',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './bred-crump.component.html',
  styleUrl: './bred-crump.component.css'
})
export class BredCrumpComponent {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() count: any;
  @Input() color: any = '#0F1926';
  @Input() breadcrumbsLinks: any[] = [];
}
