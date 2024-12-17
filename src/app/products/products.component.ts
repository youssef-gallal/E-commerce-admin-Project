import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProductService } from './services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name AR', 'name Eng', 'Actions'];
  datasource: any = [];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: '  Products List' },
  ];

  constructor(private dialog: MatDialog, private service: ProductService) { }
  ngOnInit(): void {
    this.getproductscategory()
  }


  getproductscategory() {
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
