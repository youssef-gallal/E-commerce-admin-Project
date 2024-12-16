import { Component } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { MainCategoryService } from '../../services/main-category.service';
@Component({
  selector: 'app-create-update-category',
  standalone: true,
  imports:[MatDialogModule, MatButtonModule, 
    MatFormFieldModule, MatInputModule,
     ReactiveFormsModule,
     BgOrangeComponent,
     TransparentComponent],
  templateUrl: './create-update-category.component.html',
  styleUrl: './create-update-category.component.css'
})
export class CreateUpdateCategoryComponent {
  CategoryForm!: FormGroup

  constructor(private fb: FormBuilder , private mainCatService : MainCategoryService) { }
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
    this.mainCatService.addCategory(form).subscribe(res => {
      console.log(res);
      
    })
    // console.log(dialogdata)
  }
}
