import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-orange',
  standalone: true,
  imports: [],
  templateUrl: './bg-orange.component.html',
  styleUrl: './bg-orange.component.css'
})
export class BgOrangeComponent {
  @Input() title!: string;
}
