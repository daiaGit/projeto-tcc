
import { NgxMaskModule } from 'ngx-mask';
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

import { CategoriasSmarketEditComponent } from './categorias-edit/categorias-smarket-edit.component';
import { CategoriasSmarketCreateComponent } from 'app/smarket/categorias-smarket/categorias-create/categorias-smarket-create.component';
import { CategoriasSmarketComponent } from './categorias-smarket.component';

export const routes = [
  { path: '', component: CategoriasSmarketComponent, pathMatch: 'full' },
  { path: 'categorias-smarket-create', component: CategoriasSmarketCreateComponent, data: { breadcrumb: 'Cadastrar' } },
  { path: 'categorias-smarket-edit', component: CategoriasSmarketEditComponent, data: { breadcrumb: 'Editar' } }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MultiselectDropdownModule,
    NgxPaginationModule,
    PipesModule,
    NgxMaskModule
  ],
  declarations: [
    CategoriasSmarketComponent,
    CategoriasSmarketCreateComponent,
    CategoriasSmarketEditComponent
  ]
})
export class CategoriasSmarketModule { }


