import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {
  constructor(private dialog: MatDialog) { }


  openDialog() {
    setTimeout(() => {
      this.dialog.open(DialogComponent);
    });
  }

}