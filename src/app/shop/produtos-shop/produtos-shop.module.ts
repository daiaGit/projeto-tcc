
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ProdutosShopComponent } from './produtos-shop.component';

export const routes = [
  { path: '', component: ProdutosShopComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    ProdutosShopComponent
  ]
})

export class ProdutosShopModule { }
