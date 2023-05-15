import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    Dashboard1Component,
    EditComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
