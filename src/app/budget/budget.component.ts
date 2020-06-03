import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IItem } from './models/IItem';
import { UpdateEvent } from './models/updateEvent';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  budgetItemArray: Array<IItem> = new Array<IItem>();
  item: IItem = { amount: -3000, description: 'bonjour le monde ', createdAt: new Date() };
  from = 0;
  to = 0;

  @ViewChild('screen', { static: true }) screen;

  totalBudget = 0;
  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewInit() {
  //   , AfterViewInit
  // }

  saveItem(item: IItem) {
    this.budgetItemArray.push(item);
    this.from = this.totalBudget;
    this.to = this.from + item.amount;
  }

  deleteItem(item: IItem) {
    const index = this.budgetItemArray.indexOf(item);
    this.budgetItemArray.splice(index, 1);
    this.from = this.totalBudget;
    this.to = this.from - item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.budgetItemArray[this.budgetItemArray.indexOf(updateEvent.old)] = updateEvent.new;
    this.from = this.totalBudget;
    this.to -= updateEvent.old.amount;
    this.to += updateEvent.new.amount;
  }

  updateTotal(step: any) {
    this.totalBudget += (step.sign) * (step.step);
  }
}
