import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OversigtRoutingModule } from './oversigt-routing.module';
import { OversigtComponent } from './oversigt.component';

import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [OversigtComponent],
  exports: [OversigtComponent],
  imports: [
    CommonModule,
    OversigtRoutingModule,
    FormsModule,

    CalendarModule,
    InputTextModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule
  ],
  providers: [ConfirmationService],
})
export class OversigtModule {}
