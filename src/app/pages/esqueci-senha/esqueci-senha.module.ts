import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EsqueciSenhaComponent } from './esqueci-senha.component';

export const routes = [
  { path: '', component: EsqueciSenhaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsqueciSenhaComponent]
})

export class EsqueciSenhaModule { }