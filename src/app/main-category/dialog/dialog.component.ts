import { Component, OnInit } from '@angular/core';
import { MatDialogModule, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports:
    [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  dialogform!: FormGroup

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.createform()
  }


  createform() {
    this.dialogform = this.fb.group({
      englishname: ['', Validators.required],
      arabicname: ['', Validators.required]
    })
  }
  onSubmit() {
    const dialogdata = {
      Englishname: this.dialogform.value.englishname,
      Arabicname: this.dialogform.value.arabicname
    }
    console.log(dialogdata)


  }

}
