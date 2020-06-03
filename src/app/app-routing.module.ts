import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule) },
  { path: '', redirectTo: 'budget', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
