import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SubCategoryService } from './services/sub-category.service';
import { CreateUpdateSubcategoryComponent } from './components/create-update-subcategory/create-update-subcategory.component';
import { DeleteSupCategoryComponent } from './components/delete-sup-category/delete-sup-category.component';


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
  dataSource: any = []
  displayedColumns: string[] = ['id', 'name AR', 'name Eng', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Sub Categories List' },
  ];
  constructor(private dialog: MatDialog, private service: SubCategoryService) { }
  ngOnInit(): void {
     this.getSubCategory() 
  }

  getSubCategory() {
    this.service.getSupCategory().subscribe((res: any) => {
      this.dataSource = res
      console.log(this.dataSource)
    })
  }

  createUpdateCategory(data?: any) {
    const dialogRef = this.dialog.open(CreateUpdateSubcategoryComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'action') {
        this.getSubCategory()
      }
    });
  }


  deleteSupCategory(data:any){
    const dialogRef = this.dialog.open(DeleteSupCategoryComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'action') {
        this.getSubCategory()
      }
    });
  }


}
