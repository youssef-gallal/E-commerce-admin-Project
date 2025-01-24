import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
import { VariantService } from './serives/variant.service';
import { CreateUpdateVariantComponent } from './component/create-update-variant/create-update-variant.component';
import { DeleteVariantComponent } from './component/delete-variant/delete-variant.component';

@Component({
  selector: 'app-variant',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './variant.component.html',
  styleUrl: './variant.component.css'
})
export class VariantComponent {
  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['id', 'name Eng', 'name AR', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Variant List' },
  ];
  constructor(private dialog: MatDialog, private service: VariantService) { }


  ngOnInit(): void {
    this.getMainvariant()
  }
  // ------------------------Variant list------------------------
  getMainvariant(keyWord?: any) {
    this.service.getVariant(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }
  // ------------------------------------------------

  createUpdateVariant(data?: any) {
    const dialogRef = this.dialog.open(CreateUpdateVariantComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainvariant()
      }
    });
  }

  // ------------------------------------------------
  deleteVariant(data: any) {
    const dialogRef = this.dialog.open(DeleteVariantComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMainvariant()
      }
    });
  }



  // search 
  searchInCategory() {
    this.getMainvariant(this.keyWord)
  }
}
