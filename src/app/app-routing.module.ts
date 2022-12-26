import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OversigtComponent} from "./features/oversigt/oversigt.component";

const routes: Routes = [
  {

    component: OversigtComponent,
    path: 'oversigt'
  },
  {
    redirectTo: 'oversigt',
    path: '**',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
