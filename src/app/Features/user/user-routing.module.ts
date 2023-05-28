import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { DemodetailsComponent } from './demodetails/demodetails.component';

const routes: Routes = [
  {
    path: 'data',
    component: DemoComponent,
  },
  {
    path: 'data/:id',
    component: DemodetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'data',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
