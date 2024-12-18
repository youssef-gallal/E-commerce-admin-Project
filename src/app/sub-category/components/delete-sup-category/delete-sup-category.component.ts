import { Component, Inject } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { SubCategoryComponent } from '../../sub-category.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SubCategoryService } from '../../services/sub-category.service';

@Component({
  selector: 'app-delete-sup-category',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-sup-category.component.html',
  styleUrl: './delete-sup-category.component.css'
})
export class DeleteSupCategoryComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SubCategoryComponent>,
     private supCateService:SubCategoryService ) { }

  deleteSupCategory(){
    this.supCateService.deleteSupCategory(this.data.id).subscribe(res => {
      this.dialogRef.close('action')
    })
  }
}
