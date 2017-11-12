import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../../theme/pipes/pipes.module';
import { LotesAdmComponent } from './lotes-adm.component';
import { LotesAdmData } from './lotes-adm.data';

export const routes = [
  { path: '', component: LotesAdmComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(LotesAdmData, { delay: 0 }),
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule
  ],
  declarations: [
    LotesAdmComponent
  ]
})
export class LotesAdmModule { }
