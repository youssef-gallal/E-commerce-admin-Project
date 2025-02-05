import { Component, OnInit } from '@angular/core';
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
import { OrdershippingService } from './services/ordershipping.service';

@Component({
  selector: 'app-order-shipping',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './order-shipping.component.html',
  styleUrl: './order-shipping.component.css'
})
export class OrderShippingComponent {

  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['orderId', 'shippingStatus', 'shippingMethod'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Order shipping List' },
  ];
  constructor(private service: OrdershippingService) { }


  ngOnInit(): void {
    this.getOrdershipping()
  }
  // ------------------------OrderItem list------------------------
  getOrdershipping(keyWord?: any) {
    this.service.getOrdershipping(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      console.log(this.datasource)
    })
  }
  // ------------------------------------------------
  // search 
  searchInCategory() {
    this.getOrdershipping(this.keyWord)
  }
}

