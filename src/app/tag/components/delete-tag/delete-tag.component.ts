import { Component, Inject, OnInit } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TagComponent } from '../../tag.component';
import { TagService } from '../../services/tag.service';


@Component({
  selector: 'app-delete-tag',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-tag.component.html',
  styleUrl: './delete-tag.component.css'
})
export class DeleteTagComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TagComponent>,
    private mainVariantService: TagService) { }

  ngOnInit(): void { }

  deleteTag() {
    this.mainVariantService.deleteTag(this.data.id).subscribe(res => {
      this.dialogRef.close('action')
    })
  }
}

