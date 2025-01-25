import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { BgOrangeComponent } from '../../../shared/buttons/bg-orange/bg-orange.component';
import { TransparentComponent } from '../../../shared/buttons/transparent/transparent.component';
import { RoleService } from '../../services/role.service';
import { RolesComponent } from '../../roles.component';

@Component({
  selector: 'app-create-update-role',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule,
    BgOrangeComponent,
    TransparentComponent],
  templateUrl: './create-update-role.component.html',
  styleUrl: './create-update-role.component.css'
})
export class CreateUpdateRoleComponent {
  RoleForm!: FormGroup


  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RolesComponent>,
    private mainRoleService: RoleService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.initForm()

    if (this.data) {
      this.patchValues()
    }
  }

  initForm() {
    this.RoleForm = this.fb.group({
      name: ['', Validators.required],
      displayName: ['', Validators.required],
      normalizedName: ['', Validators.required],
      description: ['', Validators.required],
      grantedPermissions: ['']

    });

  }

  patchValues(): void {
    this.RoleForm.patchValue({
      name: this.data.name,
      displayName: this.data.displayName,
      normalizedName: this.data.normalizedName,
      description: this.data.description,
      grantedPermissions: this.data.grantedPermissions
        ? this.data.grantedPermissions.join(', ')
        : '' // Convert array to a comma-separated string
    })
  }

  onSubmit() {
    let form = this.RoleForm.value
    if (this.data) {
      form.id = this.data.id
      this.mainRoleService.editRole(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    } else {
      this.mainRoleService.addRole(form).subscribe(res => {
        this.dialogRef.close('action')
      })
    }

  }
}
