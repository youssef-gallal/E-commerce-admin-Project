import { Component, Inject, OnInit } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersComponent } from '../../users.component';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UsersComponent>, private service: UserService) { }

  deleteUser() {
    this.service.deleteusers(this.data.id).subscribe(res => { this.dialogRef.close('action') })
  }


}
