import { Component, OnInit, Inject } from '@angular/core';
import { IItem } from '../../models/IItem';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>, @Inject(MAT_DIALOG_DATA) public item: IItem) { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: IItem) {
    this.dialogRef.close(updatedItem);
    console.log(updatedItem);
  }
}
