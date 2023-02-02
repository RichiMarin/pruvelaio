import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
    path: 'logout',
    component: LogoutComponent
  },{
    path: '',
    redirectTo: 'logout'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule],
  exports: [RouterModule]
})
export class LogoutRoutingModule { }
