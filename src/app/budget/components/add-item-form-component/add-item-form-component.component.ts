import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IItem } from '../../models/IItem';

@Component({
  selector: 'app-add-item-form-component',
  templateUrl: './add-item-form-component.component.html',
  styleUrls: ['./add-item-form-component.component.scss']
})
export class AddItemFormComponentComponent implements OnInit {

  itemForm = this.fb.group({
    amount: ['', Validators.required],
    description: ['', Validators.required]
  });

  isNewItem = true;
  @Output() emitItem: EventEmitter<IItem> = new EventEmitter<IItem>();
  @Input() data?: IItem;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    if (this.data) {
      this.isNewItem = false;
      delete this.data.createdAt;
      this.itemForm.setValue({ ...this.data });
    }
  }

  submitForm() {
    const item: IItem = this.itemForm.value;
    item.createdAt = new Date();
    this.emitItem.emit(item);
    this.itemForm.reset();
  }
}
