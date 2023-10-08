import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomechoferPage } from './homechofer.page';

const routes: Routes = [
  {
    path: '',
    component: HomechoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomechoferPageRoutingModule {}
