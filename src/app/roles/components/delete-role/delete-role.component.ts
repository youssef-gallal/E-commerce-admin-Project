import { Component, Inject, OnInit } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoleService } from '../../services/role.service';
import { RolesComponent } from '../../roles.component';

@Component({
  selector: 'app-delete-role',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-role.component.html',
  styleUrl: './delete-role.component.css'
})
export class DeleteRoleComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RolesComponent>,
    private mainRoleService: RoleService) { }

  ngOnInit(): void { }

  deleteVar() {
    this.mainRoleService.deleteRole(this.data.id).subscribe(res => {
      this.dialogRef.close('action')
    })
  }
}
