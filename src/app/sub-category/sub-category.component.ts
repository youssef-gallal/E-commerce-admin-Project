import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SubCategoryService } from './services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css'
})
export class SubCategoryComponent {
  datasource: any = []
  displayedColumns: string[] = ['id', 'name AR', 'name Eng', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Sub Categories List' },
  ];
  constructor(private dialog: MatDialog, private service: SubCategoryService) { }
  ngOnInit(): void { this.getsubcategory() }

  getsubcategory() {
    this.service.getCategory().subscribe((res: any) => {
      this.datasource = res
      console.log(this.datasource)
    })
  }




  // onEdit(element: any) {
  //   console.log('Edit action triggered for:', element);
  // }

  // onDelete(element: any) {
  //   console.log('Delete action triggered for:', element);
  // }
  createUpdateCategory(data?: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'action') {
      }
    });
  }


}
