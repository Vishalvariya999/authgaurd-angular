import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DynamiceditComponent } from './Features/dynamicedit/dynamicedit.component';
import { UserModule } from './Features/user/user.module';
import { Child1Component } from './Features/service/child1/child1.component';
import { Child2Component } from './Features/service/child2/child2.component';
import { FormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';
import { TestGuard } from './Features/auth/guard/test.guard';

@NgModule({
  declarations: [
    AppComponent,
    DynamiceditComponent,
    Child1Component,
    Child2Component,
    TemplateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    FormsModule,
  ],
  exports: [SharedModule],
  providers: [TestGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
