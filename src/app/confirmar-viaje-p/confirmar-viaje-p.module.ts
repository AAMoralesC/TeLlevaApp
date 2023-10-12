import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarViajePPageRoutingModule } from './confirmar-viaje-p-routing.module';

import { ConfirmarViajePPage } from './confirmar-viaje-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarViajePPageRoutingModule
  ],
  declarations: [ConfirmarViajePPage]
})
export class ConfirmarViajePPageModule {}
