import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './clima/clima.component';

const routes: Routes = [
  {
    path: 'clima',
    component: ClimaComponent
  },{
    path: '',
    redirectTo: 'clima'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule],
  exports: [RouterModule]
})
export class ClimaRoutingModule { }
