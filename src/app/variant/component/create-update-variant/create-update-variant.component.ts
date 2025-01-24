import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { VariantComponent } from '../../variant.component';
import { VariantService } from '../../serives/variant.service';
@Component({
  selector: 'app-create-update-variant',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-update-variant.component.html',
  styleUrl: './create-update-variant.component.css'
})
export class CreateUpdateVariantComponent {


  VariantForm!: FormGroup


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<VariantComponent>,
    private mainvariantService: VariantService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()

    if (this.data) {
      this.patchValues()
    }
  }

  initForm() {
    this.VariantForm = this.fb.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required]
    })
  }

  patchValues(): void {
    this.VariantForm.patchValue({
      name: this.data.name,
      nameEn: this.data.nameEn
    })
  }

  onSubmit() {
    let form = this.VariantForm.value
    if (this.data) {
      form.id = this.data.id
      this.mainvariantService.editVariant(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    } else {
      this.mainvariantService.addVariant(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }

  }
}
