import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarViajeChPageRoutingModule } from './confirmar-viaje-ch-routing.module';

import { ConfirmarViajeChPage } from './confirmar-viaje-ch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarViajeChPageRoutingModule
  ],
  declarations: [ConfirmarViajeChPage]
})
export class ConfirmarViajeChPageModule {}
