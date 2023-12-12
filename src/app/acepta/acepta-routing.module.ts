import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AceptaPage } from './acepta.page';

const routes: Routes = [
  {
    path: '',
    component: AceptaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AceptaPageRoutingModule {}
