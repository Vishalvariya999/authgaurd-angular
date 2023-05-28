import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DemoComponent } from './demo/demo.component';
import { DemodetailsComponent } from './demodetails/demodetails.component';

@NgModule({
  declarations: [DemoComponent, DemodetailsComponent],
  imports: [CommonModule, UserRoutingModule],
  exports: [DemoComponent, DemodetailsComponent],
})
export class UserModule {
  constructor() {}
}
