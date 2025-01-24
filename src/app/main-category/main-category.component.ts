import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { CreateUpdateCategoryComponent } from './components/create-update-category/create-update-category.component';
import { MaincategoryService } from './services/main-category.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DeleteCategoryComponent } from './components/delete-category/delete-category.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {

  datasource: any = []
  keyWord:any = ''
  displayedColumns: string[] = ['id','name Eng', 'name AR','Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Categories List' },
  ];
  constructor(private dialog: MatDialog, private service: MaincategoryService) { }


  ngOnInit(): void {
    this.getMainCategory()
  }



  // ------------------------category list------------------------
  getMainCategory(keyWord?:any) {
    this.service.getCategory(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }
  // ------------------------------------------------

  // ------------------------post and edit category------------------------
  createUpdateCategory(data?: any) {
    const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainCategory()
      }
    });
  }
  // ------------------------------------------------


  // ------------------------delete category------------------------
  deleteCategory(data: any) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainCategory()
      }
    });
  }

  // ------------------------------------------------


  // search 
  searchInCategory(){
    this.getMainCategory(this.keyWord)
  }
}