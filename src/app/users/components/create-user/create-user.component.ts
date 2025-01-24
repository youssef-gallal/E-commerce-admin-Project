import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { UsersComponent } from '../../users.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  Userform!: FormGroup
  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UsersComponent>,
    private USerService: UserService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()

    if (this.data) {
      this.patchValues()
    }
  }

  initForm() {
    this.Userform = this.fb.group({
      userName: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      emailAddress: ['', Validators.required, Validators.email],
      active: ['', Validators.required],
      roleNames: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  patchValues(): void {
    this.Userform.patchValue({
      userName: this.data.name,
      name: this.data.name,
      surname: this.data.surname,
      emailAddress: this.data.emailAddress,
      active: this.data.active,
      roleNames: this.data.roleNames,
      password: this.data.password,
    })
  }

  onSubmit() {
    let form = this.Userform.value
    if (this.data) {
      form.id = this.data.id
      this.USerService.editusers(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    } else {
      this.USerService.addusers(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }
    console.log(this.Userform.value)
  }
}


