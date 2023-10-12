import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarViajePPage } from './confirmar-viaje-p.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarViajePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarViajePPageRoutingModule {}
