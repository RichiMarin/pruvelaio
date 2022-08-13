import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimaRoutingModule } from './clima-routing.module';
import { ClimaComponent } from './clima/clima.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClimaComponent
  ],
  imports: [
    CommonModule,
    ClimaRoutingModule,
    FormsModule
  ]
})
export class ClimaModule { }
