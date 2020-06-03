import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IItem } from '../../models/IItem';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() data: IItem;
  isInCome: boolean;
  @Output() deleteItem = new EventEmitter<IItem>();
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    const sign = Math.sign(this.data.amount);
    this.isInCome = (sign === -1) ? false : true;
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
