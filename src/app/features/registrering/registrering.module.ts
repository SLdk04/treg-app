import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreringRoutingModule } from './registrering-routing.module';
import { RegistreringComponent } from './registrering.component';


@NgModule({
  declarations: [
    RegistreringComponent
  ],
  imports: [
    CommonModule,
    RegistreringRoutingModule
  ]
})
export class RegistreringModule { }
