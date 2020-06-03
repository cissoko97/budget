import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemFormComponentComponent } from './components/add-item-form-component/add-item-form-component.component';
import { BudgetItemListComponent } from './components/budget-item-list/budget-item-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { EditItemModalComponent } from './components/edit-item-modal/edit-item-modal.component';
import { CounterDirective } from './directives/counter.directive';


@NgModule({
  declarations: [
    BudgetComponent,
    AddItemFormComponentComponent,
    BudgetItemListComponent,
    ItemCardComponent,
    EditItemModalComponent,
    CounterDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BudgetRoutingModule,
  ],
  entryComponents: [
    EditItemModalComponent
  ]
})
export class BudgetModule { }
