import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transparent',
  standalone: true,
  imports: [],
  templateUrl: './transparent.component.html',
  styleUrl: './transparent.component.css'
})
export class TransparentComponent {
  @Input() title!: string;
}
