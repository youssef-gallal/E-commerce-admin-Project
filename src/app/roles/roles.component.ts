import { Component, OnInit } from '@angular/core';
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
import { RoleService } from './services/role.service';
import { CreateUpdateRoleComponent } from './components/create-update-role/create-update-role.component';
import { DeleteRoleComponent } from './components/delete-role/delete-role.component';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['id', 'name', 'displayName', 'normalizedName', 'description', 'grantedPermissions', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Role List' },
  ];
  constructor(private dialog: MatDialog, private service: RoleService) { }


  ngOnInit(): void {
    this.getMainRole()
  }
  // ------------------------Role list------------------------
  getMainRole(keyWord?: any) {
    this.service.getRole(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }
  // ------------------------------------------------

  createUpdateRole(data?: any) {
    const dialogRef = this.dialog.open(CreateUpdateRoleComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainRole()
      }
    });
  }

  // ------------------------------------------------
  deleteRole(data: any) {
    const dialogRef = this.dialog.open(DeleteRoleComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainRole()
      }
    });
  }



  // search 
  searchInCategory() {
    this.getMainRole(this.keyWord)
  }
}

