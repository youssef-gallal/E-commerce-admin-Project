import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { TagComponent } from '../../tag.component';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-create-update-tag',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-update-tag.component.html',
  styleUrl: './create-update-tag.component.css'
})
export class CreateUpdateTagComponent {


  TagForm!: FormGroup


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TagComponent>,
    private mainvariantService: TagService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()

    if (this.data) {
      this.patchValues()
    }
  }

  initForm() {
    this.TagForm = this.fb.group({
      name: ['', Validators.required],
      nameEn: ['', Validators.required]
    })
  }

  patchValues(): void {
    this.TagForm.patchValue({
      name: this.data.name,
      nameEn: this.data.nameEn
    })
  }

  onSubmit() {
    let form = this.TagForm.value
    if (this.data) {
      form.id = this.data.id
      this.mainvariantService.editTag(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    } else {
      this.mainvariantService.addTag(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }

  }
}

