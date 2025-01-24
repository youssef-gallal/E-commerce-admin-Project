import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['userName', 'name', 'surname', 'emailAddress', 'isActive', 'fullName', 'lastLoginTime', 'creationTime', 'roleNames', 'Actions'];

  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'User List' },
  ];
  constructor(private dialog: MatDialog, private service: UserService) { }
  ngOnInit(): void {
    this.getMainUser()
  }
  // ------------------------Variant list------------------------
  getMainUser(keyWord?: any) {
    this.service.getusers(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }

  // ------------------------------------------
  createUpdateUser(data?: any) {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainUser()
      }
    });
  }
  deleteUser(data?: any) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainUser()
      }
    });
  }










  searchInCategory() {
    this.getMainUser(this.keyWord)
  }
}
