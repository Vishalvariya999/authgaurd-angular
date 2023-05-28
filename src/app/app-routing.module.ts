import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Features/about/about.component';
import { RoleGuard } from './Features/auth/guard/role.guard';
import { TestGuard } from './Features/auth/guard/test.guard';
import { DynamiceditComponent } from './Features/dynamicedit/dynamicedit.component';
import { HomeComponent } from './Features/home/home.component';
import { Child1Component } from './Features/service/child1/child1.component';
import { Child2Component } from './Features/service/child2/child2.component';
import { ServiceComponent } from './Features/service/service.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./Features/auth/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'user',
    // canActivate: [RoleGuard],
    canLoad: [RoleGuard],
    loadChildren: () =>
      import('../app/Features/user/user.module').then((x) => x.UserModule),
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [TestGuard],
  },
  {
    path: 'service',
    canLoad: [TestGuard],
    loadChildren: () =>
      import('../app/servicelist/servicelist.module').then(
        (z) => z.ServicelistModule
      ),
  },
  // children: [
  //   {
  //     path: 'service/:type',
  //     component: ServiceComponent,
  //   },
  // ],
  {
    path: 'aboutus',
    component: TemplateformComponent,
    canActivate: [TestGuard],
  },
  {
    path: 'edit/:id',
    component: DynamiceditComponent,
    canActivate: [TestGuard],
  },
  {
    path: 'contact',
    component: ServiceComponent,
    canActivate: [RoleGuard],
    canActivateChild: [TestGuard],
    children: [
      {
        path: 'head',
        component: Child1Component,
        canDeactivate: [TestGuard],
      },
      {
        path: 'tail',
        component: Child2Component,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
