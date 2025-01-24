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
import { TagService } from './services/tag.service';
import { CreateUpdateTagComponent } from './components/create-update-tag/create-update-tag.component';
import { DeleteTagComponent } from './components/delete-tag/delete-tag.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatTableModule, MatPaginator,
    MatPaginatorModule,
    BredCrumpComponent,
    MatFormFieldModule, MatInputModule,
    FormsModule,
    BgOrangeComponent, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {

  datasource: any = []
  keyWord: any = ''
  displayedColumns: string[] = ['id', 'name Eng', 'name AR', 'Actions'];
  breadcrumbsLinks = [
    { link: '/home', name: 'Home' },
    { link: null, name: 'Tag List' },
  ];
  constructor(private dialog: MatDialog, private service: TagService) { }


  ngOnInit(): void {
    this.getMaintag()
  }
  // ------------------------Variant list------------------------
  getMaintag(keyWord?: any) {
    this.service.getTag(keyWord).subscribe((res: any) => {
      console.log(res)
      this.datasource = res.result.items
      // console.log(this.datasource)
    })
  }
  // ------------------------------------------------

  createUpdateTag(data?: any) {
    const dialogRef = this.dialog.open(CreateUpdateTagComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMaintag()
      }
    });
  }

  // ------------------------------------------------
  deleteTag(data: any) {
    const dialogRef = this.dialog.open(DeleteTagComponent, {
      data: data,
      width: '50vw'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result == 'action') {
        this.getMaintag()
      }
    });
  }
  // search 
  searchInCategory() {
    this.getMaintag(this.keyWord)
  }
}
