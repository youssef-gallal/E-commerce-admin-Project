import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { MaincategoryService } from '../../services/main-category.service';
import { MainCategoryComponent } from '../../main-category.component';
@Component({
  selector: 'app-create-update-category',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-update-category.component.html',
  styleUrl: './create-update-category.component.css'
})
export class CreateUpdateCategoryComponent implements OnInit {
  CategoryForm!: FormGroup


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MainCategoryComponent>,
     private mainCatService: MaincategoryService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()

    if(this.data){
      this.patchValues()
    }
  }



  initForm() {
    this.CategoryForm = this.fb.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required]
    })
  }

  patchValues(): void {
    this.CategoryForm.patchValue({
      name: this.data.name,
      nameEn: this.data.nameEn
    })
  }

  onSubmit() {
    let form = this.CategoryForm.value
    if(this.data){
      form.id = this.data.id
      this.mainCatService.editCategory(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }else {
      this.mainCatService.addCategory(form).subscribe(res => {
        this.dialogRef.close('action')
      }) 
    }
   
  }
}
