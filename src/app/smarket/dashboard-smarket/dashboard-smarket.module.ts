import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardSmarketComponent } from './dashboard-smarket.component';

export const routes = [
  { path: '', component: DashboardSmarketComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    DashboardSmarketComponent
  ]
})

export class DashboardSmarketModule { }
