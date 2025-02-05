import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgOrangeComponent } from "../../../shared/buttons/bg-orange/bg-orange.component";
import { TagService } from '../../../tag/services/tag.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateUpdateProductcategoryComponent } from '../create-update-productcategory/create-update-productcategory.component';
@Component({
  selector: 'app-assign-tags-product',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, TransparentComponent, BgOrangeComponent],
  templateUrl: './assign-tags-product.component.html',
  styleUrl: './assign-tags-product.component.css'
})
export class AssignTagsProductComponent {
  selectedTags = new FormControl('');
  tagsList: any = [];

  constructor(private tagService : TagService, public dialogRef: MatDialogRef<CreateUpdateProductcategoryComponent>,){}
  ngOnInit(): void {
    this.getTagsList()
  }
  getTagsList(){
    this.tagService.getTag().subscribe((res:any) => {
      console.log(res)
      this.tagsList = res.result.items
    })
  }
  onSubmit(){
    this.dialogRef.close(this.selectedTags.value)
  }
}
