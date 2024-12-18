
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';


import { SubCategoryService } from '../../services/sub-category.service';
import { BgOrangeComponent } from "../../../shared/buttons/bg-orange/bg-orange.component";
@Component({
  selector: 'app-create-update-subcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, BgOrangeComponent],
  templateUrl: './create-update-subcategory.component.html',
  styleUrl: './create-update-subcategory.component.css'
})
export class CreateUpdateSubcategoryComponent implements OnInit {
  CategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private subCatService: SubCategoryService) { }
  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.CategoryForm = this.fb.group({
      name: ['', Validators.required],
      nameEng: ['', Validators.required]
    })
  }
  onSubmit() {
    let form = this.CategoryForm.value
    this.subCatService.addCategory(form).subscribe(res => {

    })
    console.log(form);

  }
}

