import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dialer',
  },
  {
    path: 'dialer',
    loadComponent: () =>
      import('./components/dialer/dialer.component').then(
        (component) => component.DialerComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/dialer/dialer.component').then(
        (component) => component.DialerComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
