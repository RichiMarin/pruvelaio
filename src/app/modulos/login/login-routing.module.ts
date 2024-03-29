import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },{
    path: '',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
            CommonModule    ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
