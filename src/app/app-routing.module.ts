import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OversigtComponent } from './features/oversigt/oversigt.component';
import { RegistreringComponent } from './features/registrering/registrering.component';

const routes: Routes = [
  {
    component: OversigtComponent,
    path: 'oversigt',
  },
  {
    component: RegistreringComponent,
    path: 'registrering',
  },
  {
    redirectTo: 'registrering',
    path: '**',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
