import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  constructor(private dialog: MatDialog) { }


  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
