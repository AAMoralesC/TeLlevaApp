import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotiPasajeroPage } from './noti-pasajero.page';

const routes: Routes = [
  {
    path: '',
    component: NotiPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotiPasajeroPageRoutingModule {}
