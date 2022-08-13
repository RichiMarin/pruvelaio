import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {
    path: 'noticias',
    component: NoticiasComponent
  },{
    path: '',
    redirectTo: 'noticias'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
