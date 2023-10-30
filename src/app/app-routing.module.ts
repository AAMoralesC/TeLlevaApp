import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'homepasajero',
    loadChildren: () => import('./homepasajero/homepasajero.module').then( m => m.HomepasajeroPageModule)
  },
  {
    path: 'homechofer',
    loadChildren: () => import('./homechofer/homechofer.module').then( m => m.HomechoferPageModule)
  },
  {
    path: 'confirmar-viaje-p',
    loadChildren: () => import('./confirmar-viaje-p/confirmar-viaje-p.module').then( m => m.ConfirmarViajePPageModule)
  },
  {
    path: 'confirmar-viaje-ch',
    loadChildren: () => import('./confirmar-viaje-ch/confirmar-viaje-ch.module').then( m => m.ConfirmarViajeChPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'noti-pasajero',
    loadChildren: () => import('./noti-pasajero/noti-pasajero.module').then( m => m.NotiPasajeroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
