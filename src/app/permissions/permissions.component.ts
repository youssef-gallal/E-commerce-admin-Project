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
import { PermissionService } from './services/permission.service';
@Component({
  selector: 'app-permissions',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css'
})
export class PermissionsComponent {
  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['id', 'name', 'displayName', 'description'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Permisions List' },
  ];
  constructor(private dialog: MatDialog, private service: PermissionService) { }


  ngOnInit(): void {
    this.getMainPermision()
  }
  // ------------------------Variant list------------------------
  getMainPermision(keyWord?: any) {
    this.service.getTag(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }

  // search 
  searchInCategory() {
    this.getMainPermision(this.keyWord)
  }
}


