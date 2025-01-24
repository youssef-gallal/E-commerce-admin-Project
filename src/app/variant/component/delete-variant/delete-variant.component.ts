import { Component, Inject, OnInit } from '@angular/core';
import { TransparentComponent } from "../../../shared/buttons/transparent/transparent.component";
import { BgRedComponent } from "../../../shared/buttons/bg-red/bg-red.component";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VariantService } from '../../serives/variant.service';
import { VariantComponent } from '../../variant.component';

@Component({
  selector: 'app-delete-variant',
  standalone: true,
  imports: [TransparentComponent, BgRedComponent],
  templateUrl: './delete-variant.component.html',
  styleUrl: './delete-variant.component.css'
})
export class DeleteVariantComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<VariantComponent>,
    private mainVariantService: VariantService) { }

  ngOnInit(): void { }

  deleteVar() {
    this.mainVariantService.deleteVariant(this.data.id).subscribe(res => {
      this.dialogRef.close('action')
    })
  }
}

