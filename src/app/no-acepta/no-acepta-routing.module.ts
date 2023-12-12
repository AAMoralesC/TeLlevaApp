import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoAceptaPage } from './no-acepta.page';

const routes: Routes = [
  {
    path: '',
    component: NoAceptaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoAceptaPageRoutingModule {}
