import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicelistRoutingModule } from './servicelist-routing.module';
import { Model1Component } from './model1/model1.component';
import { Model2Component } from './model2/model2.component';


@NgModule({
  declarations: [
    Model1Component,
    Model2Component
  ],
  imports: [
    CommonModule,
    ServicelistRoutingModule
  ]
})
export class ServicelistModule { }
