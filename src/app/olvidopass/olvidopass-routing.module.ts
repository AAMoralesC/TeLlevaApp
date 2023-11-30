import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidopassPage } from './olvidopass.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidopassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidopassPageRoutingModule {}
