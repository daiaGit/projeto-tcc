/** Angular */
import { HttpModule } from '@angular/http';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

/** Component */
import { RegisterEstabelecimentoVendedorComponent } from './register-estabelecimento-vendedor.component';

export const routes = [
  { path: '', component: RegisterEstabelecimentoVendedorComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(routes),
    NgxMaskModule
  ],
  declarations: [
    RegisterEstabelecimentoVendedorComponent
  ]
})

export class RegisterEstabelecimentoVendedorModule { }
