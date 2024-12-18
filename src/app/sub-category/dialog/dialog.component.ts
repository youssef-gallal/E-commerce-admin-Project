import { Component, OnInit } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BgOrangeComponent } from "../../shared/buttons/bg-orange/bg-orange.component";
import { SubCategoryService } from '../services/sub-category.service';




@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, BgOrangeComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
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
    this.subCatService.addCategory(form).subscribe((res: any) => {
      console.log(res);

    })
    // console.log(dialogdata)
  }
}
