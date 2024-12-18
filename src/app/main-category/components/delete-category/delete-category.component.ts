import { Component, Inject, OnInit } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MainCategoryComponent } from '../../main-category.component';
import { MaincategoryService } from '../../services/main-category.service';

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.css'
})
export class DeleteCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MainCategoryComponent>,
     private mainCatService: MaincategoryService) { }

  ngOnInit(): void {}

  deleteCat(){
    this.mainCatService.deleteCategory(this.data.id).subscribe(res => {
      this.dialogRef.close('action')
    })
  }
}
