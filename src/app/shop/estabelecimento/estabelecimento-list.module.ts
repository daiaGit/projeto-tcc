import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EstabelecimentoListComponent } from './estabelecimento-list.component';

export const routes = [
  { path: '', component: EstabelecimentoListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    EstabelecimentoListComponent
  ]
})

export class EstabelecimentoListModule { }
