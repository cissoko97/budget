import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../models/IItem';
import { MatDialog } from '@angular/material';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { UpdateEvent } from '../../models/updateEvent';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit, OnChanges {

  @Input() listBudgetArray: Array<IItem> = new Array<IItem>();
  @Output() delete: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }


  deleteItem(item: IItem) {
    this.delete.emit(item);
  }

  onCardClicked(item: IItem) {
    // show the edit modal
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: item,
    });

    dialogRef.afterClosed().subscribe(
      result => {
        // check if result has a values
        if (result) {
          // replace the items on a array
          this.update.emit({
            old: item,
            new: result
          });
        }
      }
    );
  }
}
