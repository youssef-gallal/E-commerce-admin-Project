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
import { OrderItemService } from './servies/order-item.service';


@Component({
  selector: 'app-order-item',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent implements OnInit {
  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['orderId', 'productId', 'quantity', 'productPrice'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Order Item List' },
  ];
  constructor(private service: OrderItemService) { }


  ngOnInit(): void {
    this.getOrderItem()
  }
  // ------------------------OrderItem list------------------------
  getOrderItem(keyWord?: any) {
    this.service.getOrderitem(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      console.log(this.datasource)
    })
  }
  // ------------------------------------------------
  // search 
  searchInCategory() {
    this.getOrderItem(this.keyWord)
  }
}
