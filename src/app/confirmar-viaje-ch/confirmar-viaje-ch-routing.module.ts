import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarViajeChPage } from './confirmar-viaje-ch.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarViajeChPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarViajeChPageRoutingModule {}
