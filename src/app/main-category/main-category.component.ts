import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ReactiveFormsModule],
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