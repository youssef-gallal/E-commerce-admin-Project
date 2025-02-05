import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BgOrangeComponent } from "../../../shared/buttons/bg-orange/bg-orange.component";
import { MatSelectModule } from '@angular/material/select';
import { SubCategoryService } from '../../../sub-category/services/sub-category.service';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AssignTagsProductComponent } from '../assign-tags-product/assign-tags-product.component';
import { TagService } from '../../../tag/services/tag.service';
import { AssignProductVariantComponent } from '../assign-product-variant/assign-product-variant.component';



@Component({
  selector: 'app-create-update-productcategory',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule, CommonModule, MatCardModule, BgOrangeComponent,MatSelectModule],
  templateUrl: './create-update-productcategory.component.html',
  styleUrl: './create-update-productcategory.component.css'
})
export class CreateUpdateProductcategoryComponent implements OnInit {


  productForm!: FormGroup;
  supCategoryList:any[]=[]
  productId:any
  constructor(private fb: FormBuilder,
    private productService : ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private supCatService : SubCategoryService,
    private tagsService : TagService) { }
  ngOnInit(): void {
    this.getSupCategoryList()
    this.initForm()
    this.route.paramMap.subscribe((param: any) => {
      this.productId = param.params.id;

      if ( this.productId) {
        this.getSingleProduct( this.productId)
        this.getProductTags()
      }
    });
  }
  initForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      discountPrice : [0, [Validators.required, Validators.min(0)]],
      description: [''],
      descriptionEn: [''],
      subCategoryId: ['', Validators.required],
    });
  }

  getSupCategoryList(){
    this.supCatService.getSupCategory().subscribe((res: any) => {
      this.supCategoryList = res.result.items
    })
  }

  getSingleProduct(id:any){
    this.productService.getSingleProduct(id).subscribe((res:any) => {
      console.log(res)
      this.patchForm(res.result)
    })
  }
  patchForm(response:any){
    this.productForm.patchValue({

      name: response.name,
      nameEn: response.nameEn,
      price: response.price,
      discountPrice: response.discountPrice,
      description: response.description,
      descriptionEn: response.descriptionEn,
      subCategoryId: response.subCategoryId,
    
    })
  }


// tags
  addTags(){
    const dialogRef = this.dialog.open(AssignTagsProductComponent, {
      // data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let data = {
          productId :this.productId,
          tagsIds : result
        }
        console.log(data)
        this.tagsService.addProductTag(data).subscribe(res => {
          console.log(res)
        })
      }
    });
  }

  getProductTags(){
    this.tagsService.getProductTag(this.productId).subscribe(res => {
      console.log(res)
    })
  }

  addVariant(){
    const dialogRef = this.dialog.open(AssignProductVariantComponent, {
      // data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let data = {
          productId :this.productId,
          tagsIds : result
        }
        console.log(data)
        this.tagsService.addProductTag(data).subscribe(res => {
          console.log(res)
        })
      }
    });
  }

  getProductVariant(){
    this.tagsService.getProductTag(this.productId).subscribe(res => {
      console.log(res)
    })
  }
  


  onSubmit() {
    if (this.productForm.valid) {
      console.log('Form Submitted:', this.productForm.value);
    } else {
      console.log('Form is invalid');
    }

    this.productService.addProduct(this.productForm.value).subscribe(res => {
      console.log(res)
      this.router.navigate(['/products'], {
      }).then()
    })
  }
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

