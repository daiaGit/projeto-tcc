import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterConsumidorComponent } from './register-consumidor.component';

export const routes = [
  { path: '', component: RegisterConsumidorComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    RegisterConsumidorComponent
  ]
})
export class RegisterConsumidorModule { }
