import { Component } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';


@Component({
  selector: 'app-create-update-productcategory',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-update-productcategory.component.html',
  styleUrl: './create-update-productcategory.component.css'
})
export class CreateUpdateProductcategoryComponent {

  CategoryForm!: FormGroup
  constructor(private fb: FormBuilder, private productService: ProductService) { }
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
    this.productService.addCategory(form).subscribe(res => {
      console.log(res);

    })
    // console.log(dialogdata)
  }
}
