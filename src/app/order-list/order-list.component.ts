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
import { OrderListService } from './services/order-list.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['customerId', 'orderStatus', 'shippmentAt', 'shippmentAddress', 'shippmentPhone'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Order  List' },
  ];
  constructor(private service: OrderListService) { }


  ngOnInit(): void {
    this.getOrderList()
  }
  // ------------------------OrderItem list------------------------
  getOrderList(keyWord?: any) {
    this.service.getOrderList(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      console.log(this.datasource)
    })
  }
  // ------------------------------------------------
  // search 
  searchInCategory() {
    this.getOrderList(this.keyWord)
  }
}

