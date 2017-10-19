import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { EstabelecimentosShopComponent } from './../estabelecimentos-shop/estabelecimentos-shop.component';

export const routes = [
  { path: '', component: EstabelecimentosShopComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    EstabelecimentosShopComponent
  ]
})

export class EstabelecimentosShopModule { }
