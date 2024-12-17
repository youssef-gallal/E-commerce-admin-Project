import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { DialogComponent } from './dialog/dialog.component';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
