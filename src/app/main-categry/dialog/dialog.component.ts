import { Component } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MainCategoryService } from '../../main-category/services/main-category.service';
import { BgOrangeComponent } from "../../shared/buttons/bg-orange/bg-orange.component";
import { TransparentComponent } from '../../shared/buttons/transparent/transparent.component';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, BgOrangeComponent, TransparentComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  CategoryForm!: FormGroup

  constructor(private fb: FormBuilder, private mainCatService: MainCategoryService) { }
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


