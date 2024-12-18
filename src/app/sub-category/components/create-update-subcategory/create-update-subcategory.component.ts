
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { SubCategoryService } from '../../services/sub-category.service';
import { BgOrangeComponent } from "../../../shared/buttons/bg-orange/bg-orange.component";
import { MaincategoryService } from '../../../main-category/services/main-category.service';
import { CommonModule } from '@angular/common';
import { SubCategoryComponent } from '../../sub-category.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
@Component({
  selector: 'app-create-update-subcategory',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatFormFieldModule,
     MatInputModule, ReactiveFormsModule, MatSelectModule, BgOrangeComponent,TransparentComponent],
  templateUrl: './create-update-subcategory.component.html',
  styleUrl: './create-update-subcategory.component.css'
})
export class CreateUpdateSubcategoryComponent implements OnInit {
  supCategoryForm!: FormGroup
  categoriesList:any[] =[]
  constructor(private fb: FormBuilder, 
    private categoryService : MaincategoryService,
    public dialogRef: MatDialogRef<SubCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private subCatService: SubCategoryService) { }
  ngOnInit(): void {
    this.listOfCategories()
    this.initForm()

    if(this.data){
      this.patchValues()
    }

  }

  listOfCategories(){
    this.categoryService.getCategory().subscribe((res: any) => {
      this.categoriesList = res
    })
  }
  initForm() {
    this.supCategoryForm = this.fb.group({
      name: ['', Validators.required],
      nameEng: ['', Validators.required],
      mainCategoryId : ['', Validators.required]
    })
  }
  patchValues(): void {
    this.supCategoryForm.patchValue({
      name: this.data.name,
      nameEng: this.data.nameEng,
      mainCategoryId:this.data.mainCategoryId
    })
  }

  onSubmit() {
    let form = this.supCategoryForm.value
    if(this.data){
      this.subCatService.editSupCategory(this.data.id,form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }else {
      this.subCatService.addSupCategory(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }
 

  }
}

