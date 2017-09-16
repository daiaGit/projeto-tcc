import { ContatoComponent } from './contato-consumidor.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

export const routes = [
  { path: '', component: ContatoComponent, pathMatch: 'full' }
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
    ContatoComponent
  ]
})
export class ConsumidorModule { }
