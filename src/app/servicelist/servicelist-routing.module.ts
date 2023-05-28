import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Model1Component } from './model1/model1.component';
import { Model2Component } from './model2/model2.component';

const routes: Routes = [
  {
    path: 'servicedata',
    component: Model1Component,
  },
  {
    path: 'servicedata/:id',
    component: Model2Component,
  },
  {
    path: '**',
    redirectTo: 'servicedata',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicelistRoutingModule {}
