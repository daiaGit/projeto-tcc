import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterEstabelecimentoComponent } from './register-estabelecimento.component';

export const routes = [
  { path: '', component: RegisterEstabelecimentoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterEstabelecimentoComponent
  ]
})
export class RegisterEstabelecimentoModule { }
