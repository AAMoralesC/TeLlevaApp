import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepasajeroPage } from './homepasajero.page';

const routes: Routes = [
  {
    path: '',
    component: HomepasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepasajeroPageRoutingModule {}
