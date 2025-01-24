import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { ProductService } from './services/product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


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
  displayedColumns: string[] = ['id','name Eng', 'name AR','price','discountPrice', 'Actions'];
  dataSource: any = [];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: '  Products List' },
  ];

  constructor(private dialog: MatDialog, private service: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.getProductsCategory()
  }


  getProductsCategory() {
    this.service.getAllProducts().subscribe((res: any) => {
      console.log(res)
      this.dataSource = res.result.items
    })
  }

  createProduct(){
    this.router.navigate(['/create_products'], {
    }).then()
  }

  editProduct(item:any){
    this.router.navigate(['/edit_products/' + item.id], {
    }).then()
  }

}
