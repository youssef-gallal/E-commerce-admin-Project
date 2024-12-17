import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { CreateUpdateCategoryComponent } from './components/create-update-category/create-update-category.component';
import { MaincategoryService } from './services/main-category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {

  datasource: any = []
  displayedColumns: string[] = ['id', 'name AR', 'name Eng', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Categories List' },
  ];
  constructor(private dialog: MatDialog, private service: MaincategoryService) { }
  ngOnInit(): void { this.getmaincategory() }

  getmaincategory() {
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
    const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'action') {
      }
    });
  }

}