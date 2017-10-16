import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { routing } from './pages.routing';

import { HeaderComponent } from '../theme/components/header/header.component';
import { BlankComponent } from './blank/blank.component';
import { SearchComponent } from './search/search.component';
import { PagesComponent } from './pages.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    routing
  ],
  declarations: [
    PagesComponent,
    BlankComponent,
    SearchComponent
  ]
})
export class PagesModule { }
