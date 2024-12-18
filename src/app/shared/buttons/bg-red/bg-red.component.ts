import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-red',
  standalone: true,
  imports: [],
  templateUrl: './bg-red.component.html',
  styleUrl: './bg-red.component.css'
})
export class BgRedComponent {
  @Input() title!: string;
}
