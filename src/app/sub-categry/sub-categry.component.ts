import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { DialogComponent } from './dialog/dialog.component';
import { SubcategoryService } from './services/subcategory.service';


@Component({
  selector: 'app-sub-categry',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent],
  templateUrl: './sub-categry.component.html',
  styleUrl: './sub-categry.component.css'
})
export class SubCategryComponent implements OnInit {
  datasource: any = []
  displayedColumns: string[] = ['id', 'name AR', 'name Eng'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Sub Categories List' },
  ];
  constructor(private dialog: MatDialog, private service: SubcategoryService) { }

  ngOnInit(): void { this.getsubcategory() }

  getsubcategory() {
    this.service.getCategory().subscribe((res: any) => {
      this.datasource = res
      console.log(this.datasource)
    })
  }
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
