import { Component, OnInit } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SubcategoryService } from '../services/subcategory.service';
import { BgOrangeComponent } from "../../shared/buttons/bg-orange/bg-orange.component";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, BgOrangeComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  CategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private subCatService: SubcategoryService) { }
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
      console.log(res);

    })
    // console.log(dialogdata)
  }
}










