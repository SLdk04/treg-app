import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OversigtRoutingModule } from './oversigt-routing.module';
import { OversigtComponent } from './oversigt.component';


@NgModule({
    declarations: [
        OversigtComponent
    ],
    exports: [
        OversigtComponent
    ],
    imports: [
        CommonModule,
        OversigtRoutingModule
    ]
})
export class OversigtModule { }
