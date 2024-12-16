import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { BredCrumpComponent } from '../shared/bred-crump/bred-crump.component';
import { BgOrangeComponent } from '../shared/buttons/bg-orange/bg-orange.component';
import { CreateUpdateCategoryComponent } from './components/create-update-category/create-update-category.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-main-category',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule,MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    BgOrangeComponent],
  templateUrl: './main-category.component.html',
  styleUrl: './main-category.component.css'
})
export class MainCategoryComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Categories List' },
  ];

  constructor(private dialog: MatDialog) { }




  createUpdateCategory (data?:any){
    const dialogRef = this.dialog.open(CreateUpdateCategoryComponent, {
      data: data,
      width : '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'action') {        
      }
    });
  }

}