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
import { OrderpaymentService } from './services/orderpayment.service';

@Component({
  selector: 'app-order-payment',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './order-payment.component.html',
  styleUrl: './order-payment.component.css'
})
export class OrderPaymentComponent {

  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['orderId', 'paymentStatus', 'paymentMethod', 'paymentDate', 'transactionId'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Order payment List' },
  ];
  constructor(private service: OrderpaymentService) { }


  ngOnInit(): void {
    this.getOrderpayment()
  }
  // ------------------------OrderItem list------------------------
  getOrderpayment(keyWord?: any) {
    this.service.getOrderpayment(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      console.log(this.datasource)
    })
  }
  // ------------------------------------------------
  // search 
  searchInCategory() {
    this.getOrderpayment(this.keyWord)
  }
}

