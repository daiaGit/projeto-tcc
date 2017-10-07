import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardAdmComponent } from './dashboard-adm.component';

export const routes = [
  { path: '', component: DashboardAdmComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    DashboardAdmComponent
  ]
})

export class DashboardAdmModule { }
