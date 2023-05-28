import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from '../Features/service/service.component';
import { AboutComponent } from '../Features/about/about.component';
import { HomeComponent } from '../Features/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ServiceComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent],
})
export class SharedModule {}
