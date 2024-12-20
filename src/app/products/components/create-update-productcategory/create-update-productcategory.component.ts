import { Component, OnInit } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BgOrangeComponent } from "../../../shared/buttons/bg-orange/bg-orange.component";



@Component({
  selector: 'app-create-update-productcategory',
  standalone: true,
  imports: [MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, CommonModule, MatCardModule, BgOrangeComponent],
  templateUrl: './create-update-productcategory.component.html',
  styleUrl: './create-update-productcategory.component.css'
})
export class CreateUpdateProductcategoryComponent implements OnInit {


  productForm!: FormGroup;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createproduct()
  }
  createproduct() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      nameEng: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      descriptionEng: [''],
      acceptCharms: [true],
      acceptGraver: [true],
      maxCharmCount: [0, Validators.min(0)],
      sizes: [''],
      productCategoryId: ['', Validators.required],
      // productColors: this.fb.array([]),

    });
  }

  // Get productColors as a FormArray
  // get productColors(): FormArray {
  //   return this.productForm.get('productColors') as FormArray;
  // }

  // Add a new color
  // addColor(): void {
  //   const colorGroup = this.fb.group({
  //     name: ['', Validators.required],
  //     hexValue: ['', Validators.required],
  //   });
  //   this.productColors.push(colorGroup);
  // }


  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted:', this.productForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

















// CategoryForm!: FormGroup
// constructor(private fb: FormBuilder, private productService: ProductService) { }
// ngOnInit(): void {
//   this.initForm()
// }
// initForm() {
//   this.CategoryForm = this.fb.group({
//     name: ['', Validators.required],
//     nameEng: ['', Validators.required]
//   })
// }
// onSubmit() {
//   let form = this.CategoryForm.value
//   this.productService.addCategory(form).subscribe(res => {
//     console.log(res);

//   })
//   // console.log(dialogdata)
// }

