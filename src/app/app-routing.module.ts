import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modulos/login/login/login.component';

// Carga de rutas generales y loadchildren (Rutas hijas), carga perezosa lazyload

const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },{
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  //Rutas hijas
  {
    path: 'login',
    loadChildren: () => import('./modulos/login/login.module').then(m => m.LoginModule)
  },{
    path: 'clima',
    loadChildren: () => import('./modulos/clima/clima.module').then(m => m.ClimaModule)
  },{
    path: 'noticias',
    loadChildren: () => import('./modulos/noticias/noticias.module').then(m => m.NoticiasModule)
  },{
    path:'**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
