import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { BaseComponent } from './base/base.component';

const routes: Routes = [
  { path: '', component: BaseComponent }
];

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
